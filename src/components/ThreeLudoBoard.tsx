import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Token, PlayerColor, GameState } from '../types';
import { TRACK_COORDS, HOME_PATHS, BASE_POCKETS, gridToVec3, START_OFFSETS, SAFE_INDICES, CENTER_HOMES } from '../utils/ludoConstants';
import { audio } from '../utils/audio';

interface ThreeLudoBoardProps {
  gameState: GameState;
  selectableTokenIds: number[];
  onTokenClick: (tokenId: number) => void;
  onDiceRollComplete: () => void;
}

export default function ThreeLudoBoard({
  gameState,
  selectableTokenIds,
  onTokenClick,
  onDiceRollComplete
}: ThreeLudoBoardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  
  // Animation state references
  const tokenMeshesRef = useRef<Map<string, THREE.Group>>(new Map()); // Key: color_id
  const diceMeshRef = useRef<THREE.Mesh | null>(null);
  const particlesRef = useRef<THREE.Points[]>([]);
  const hoverIntersectRef = useRef<string | null>(null); // Hover state tracking

  // Physical parameters for active animations
  const diceAnimRef = useRef<{
    active: boolean;
    duration: number;
    elapsed: number;
    vx: number; vy: number; vz: number;
    rx: number; ry: number; rz: number;
    targetValue: number;
  }>({
    active: false,
    duration: 0,
    elapsed: 0,
    vx: 0, vy: 0, vz: 0,
    rx: 0, ry: 0, rz: 0,
    targetValue: 1
  });

  const tokenMoveQueueRef = useRef<{
    color: PlayerColor;
    id: number;
    steps: [number, number, number][]; // 3D path coordinates to hop through
    currentStepIdx: number;
    stepProgress: number; // 0 to 1 for current arc
  } | null>(null);

  // Sound play prevention helper
  const isRollingPrevRef = useRef(false);

  // Generate a premium procedural walnut wood texture
  const generateWoodTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // Mahogany/Walnut dark wood layers list
      const grad = ctx.createRadialGradient(256, 256, 10, 256, 256, 400);
      grad.addColorStop(0, '#5a3825');
      grad.addColorStop(0.3, '#3d2518');
      grad.addColorStop(0.7, '#482c1d');
      grad.addColorStop(1, '#25160e');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 512, 512);

      // Fine grain noise loops
      ctx.strokeStyle = 'rgba(25, 12, 6, 0.45)';
      ctx.lineWidth = 1.5;
      for (let r = 8; r < 600; r += 6 + Math.random() * 8) {
        ctx.beginPath();
        // Distort circular lines to mimic natural wood grain curves
        for (let theta = 0; theta < Math.PI * 2; theta += 0.05) {
          const distort = Math.sin(theta * 6) * 12 + Math.cos(theta * 3) * 6;
          const x = 256 + (r + distort) * Math.cos(theta);
          const y = 256 + (r + distort) * Math.sin(theta);
          if (theta === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
      }
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  };

  // Generate a glossy white or colored marble texture
  const generateMarbleTexture = (baseColor: string, veinsColor: string) => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = baseColor;
      ctx.fillRect(0, 0, 256, 256);

      // Webby dynamic marble veins
      ctx.strokeStyle = veinsColor;
      ctx.lineWidth = 1.0;
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        let x = Math.random() * 256;
        let y = 0;
        ctx.moveTo(x, y);
        while (y < 256) {
          x += (Math.random() - 0.5) * 30;
          y += Math.random() * 40;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    }
    return new THREE.CanvasTexture(canvas);
  };

  // Setup the entire WebGL 3D Atmosphere
  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // SCENE
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#050505'); // Premium elegant dark setup
    scene.fog = new THREE.FogExp2('#050505', 0.015);
    sceneRef.current = scene;

    // CAMERA
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 14, 11); // Elevated cinematic projection angle
    camera.lookAt(0, -0.5, 0);
    cameraRef.current = camera;

    // RENDERER
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // LIGHTING
    const ambientLight = new THREE.AmbientLight('#2a3245', 1.6);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight('#ffffff', 1.8);
    sunLight.position.set(8, 15, 6);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 30;
    const d = 10;
    sunLight.shadow.camera.left = -d;
    sunLight.shadow.camera.right = d;
    sunLight.shadow.camera.top = d;
    sunLight.shadow.camera.bottom = -d;
    sunLight.shadow.bias = -0.0005;
    scene.add(sunLight);

    // Warm subtle key spotlight targeting the board's heart
    const spotLight = new THREE.SpotLight('#ffe7c4', 2.5);
    spotLight.position.set(-6, 12, -4);
    spotLight.angle = Math.PI / 4;
    spotLight.penumbra = 0.8;
    spotLight.castShadow = true;
    scene.add(spotLight);

    // BLUEPRINT 3D BOARD CREATION
    const woodTex = generateWoodTexture();
    const ludoBoardMat = new THREE.MeshStandardMaterial({
      map: woodTex,
      roughness: 0.15,
      metalness: 0.1,
      bumpMap: woodTex,
      bumpScale: 0.008
    });

    // Outer luxury console box
    const outerBoxGeom = new THREE.BoxGeometry(16.5, 1.2, 16.5);
    const boardBox = new THREE.Mesh(outerBoxGeom, ludoBoardMat);
    boardBox.position.y = -0.6;
    boardBox.receiveShadow = true;
    scene.add(boardBox);

    // Gold Bevel Borders around the board box
    const borderMat = new THREE.MeshStandardMaterial({
      color: '#d4af37', // Pure luxury brass/gold
      metalness: 0.9,
      roughness: 0.12
    });
    const borderTopGeom = new THREE.BoxGeometry(16.6, 0.1, 16.6);
    const borderTop = new THREE.Mesh(borderTopGeom, borderMat);
    borderTop.position.y = 0.05;
    scene.add(borderTop);

    // MAIN TILES & BOARD STRUCTURE
    // Let's create the 15x15 marble board tiles
    const tileGeom = new THREE.BoxGeometry(0.9, 0.15, 0.9);
    const centerGeom = new THREE.BoxGeometry(2.9, 0.15, 2.9);

    const marbleWhite = generateMarbleTexture('#ffffff', '#e2e8f0');
    const marbleRed = generateMarbleTexture('#fee2e2', '#ef4444');
    const marbleGreen = generateMarbleTexture('#dcfce7', '#22c55e');
    const marbleYellow = generateMarbleTexture('#fef9c3', '#eab308');
    const marbleBlue = generateMarbleTexture('#dbeafe', '#3b82f6');

    const boardGroup = new THREE.Group();

    // Loop grid cell structures
    for (let col = 0; col < 15; col++) {
      for (let row = 0; row < 15; row++) {
        // Exclude central home (9 tiles mapped to a single nice large golden center piece later)
        if (col >= 6 && col <= 8 && row >= 6 && row <= 8) {
          continue;
        }

        let currentTileMat = new THREE.MeshStandardMaterial({
          map: marbleWhite,
          roughness: 0.1,
          metalness: 0.05
        });

        // Coloring specific coordinates (Red, Green, Yellow, Blue safe/start spots)
        // Red base quadrant (0..5, 0..5)
        if (col < 6 && row < 6) {
          currentTileMat = new THREE.MeshStandardMaterial({ map: marbleRed, roughness: 0.15 });
        }
        // Green base quadrant (9..14, 0..5)
        else if (col > 8 && row < 6) {
          currentTileMat = new THREE.MeshStandardMaterial({ map: marbleGreen, roughness: 0.15 });
        }
        // Yellow base quadrant (9..14, 9..14)
        else if (col > 8 && row > 8) {
          currentTileMat = new THREE.MeshStandardMaterial({ map: marbleYellow, roughness: 0.15 });
        }
        // Blue base quadrant (0..5, 9..14)
        else if (col < 6 && row > 8) {
          currentTileMat = new THREE.MeshStandardMaterial({ map: marbleBlue, roughness: 0.15 });
        }

        // Color specific track paths
        // RED starts at [1, 6], Red home sequence [1, 7]..[5, 7]
        if (row === 7 && col >= 1 && col <= 5) {
          currentTileMat = new THREE.MeshStandardMaterial({ map: marbleRed, roughness: 0.1 });
        }
        // GREEN starts at [8, 1], Green home sequence [7, 1]..[7, 5]
        else if (col === 7 && row >= 1 && row <= 5) {
          currentTileMat = new THREE.MeshStandardMaterial({ map: marbleGreen, roughness: 0.1 });
        }
        // YELLOW starts at [13, 8], Yellow home sequence [13, 7]..[9, 7]
        else if (row === 7 && col >= 9 && col <= 13) {
          currentTileMat = new THREE.MeshStandardMaterial({ map: marbleYellow, roughness: 0.1 });
        }
        // BLUE starts at [6, 13], Blue home sequence [7, 13]..[7, 9]
        else if (col === 7 && row >= 9 && row <= 13) {
          currentTileMat = new THREE.MeshStandardMaterial({ map: marbleBlue, roughness: 0.1 });
        }

        // Star safe keypoints
        const matchSafe = SAFE_INDICES.some(idx => TRACK_COORDS[idx][0] === col && TRACK_COORDS[idx][1] === row);
        if (matchSafe) {
          currentTileMat = new THREE.MeshStandardMaterial({
            color: '#ffd700',
            metalness: 0.7,
            roughness: 0.15
          });
        }

        const [tx, ty, tz] = gridToVec3(col, row, 0.08);
        const tile = new THREE.Mesh(tileGeom, currentTileMat);
        tile.position.set(tx, ty, tz);
        tile.receiveShadow = true;
        boardGroup.add(tile);
      }
    }

    // Centered Golden Home Core
    const goldHomeMat = new THREE.MeshStandardMaterial({
      color: '#d4af37',
      metalness: 0.9,
      roughness: 0.08
    });
    const centerHome = new THREE.Mesh(centerGeom, goldHomeMat);
    centerHome.position.set(0, 0.08, 0);
    centerHome.receiveShadow = true;
    boardGroup.add(centerHome);

    // Draw base ring outlines in original base quadrants
    const pocketRingGeom = new THREE.RingGeometry(1.5, 1.8, 32);
    pocketRingGeom.rotateX(-Math.PI / 2);
    
    const colors: { name: PlayerColor; x: number; z: number; color: string }[] = [
      { name: 'red', x: -4.5, z: -4.5, color: '#ef4444' },
      { name: 'green', x: 4.5, z: -4.5, color: '#22c55e' },
      { name: 'yellow', x: 4.5, z: 4.5, color: '#eab308' },
      { name: 'blue', x: -4.5, z: 4.5, color: '#3b82f6' }
    ];

    colors.forEach(b => {
      const baseMat = new THREE.MeshStandardMaterial({
        color: b.color,
        roughness: 0.1,
        metalness: 0.6,
        side: THREE.DoubleSide
      });
      const baseCircle = new THREE.Mesh(pocketRingGeom, baseMat);
      baseCircle.position.set(b.x, 0.16, b.z);
      boardGroup.add(baseCircle);
    });

    scene.add(boardGroup);

    // 3D DICE & CUPS ELEVATION
    const diceGeom = new THREE.BoxGeometry(0.85, 0.85, 0.85);
    const diceMaterials = [
      new THREE.MeshStandardMaterial({ color: '#fcfcfc', roughness: 0.1 }), // Face 1
      new THREE.MeshStandardMaterial({ color: '#fcfcfc', roughness: 0.1 }), // Face 2
      new THREE.MeshStandardMaterial({ color: '#fcfcfc', roughness: 0.1 }), // Face 3
      new THREE.MeshStandardMaterial({ color: '#fcfcfc', roughness: 0.1 }), // Face 4
      new THREE.MeshStandardMaterial({ color: '#fcfcfc', roughness: 0.1 }), // Face 5
      new THREE.MeshStandardMaterial({ color: '#fcfcfc', roughness: 0.1 })  // Face 6
    ];

    // Wait! Add high-quality red-dot details to the dice faces
    const createDicePips = (faces_textures: string[]) => {
      // Instead of file loader textures, we can paint beautifully onto small dynamic CanvasTextures!
      const pips = [
        [ [128, 128] ], // 1
        [ [64, 64], [192, 192] ], // 2
        [ [64, 64], [128, 128], [192, 192] ], // 3
        [ [64, 64], [64, 192], [192, 64], [192, 192] ], // 4
        [ [64, 64], [64, 192], [128, 128], [192, 64], [192, 192] ], // 5
        [ [64, 64], [64, 128], [64, 192], [192, 64], [192, 128], [192, 192] ] // 6
      ];

      for (let f = 0; f < 6; f++) {
        const can = document.createElement('canvas');
        can.width = 256;
        can.height = 256;
        const c = can.getContext('2d');
        if (c) {
          c.fillStyle = '#ffffff';
          c.fillRect(0, 0, 256, 256);
          c.strokeStyle = '#d4af37';
          c.lineWidth = 14;
          c.strokeRect(7, 7, 242, 242);

          // Pips draw
          c.fillStyle = f === 0 ? '#ef4444' : '#1e293b'; // Big red center pip for 1, black for others
          const pipSize = f === 0 ? 30 : 20;
          pips[f].forEach(([px, py]) => {
            c.beginPath();
            c.arc(px, py, pipSize, 0, Math.PI * 2);
            c.fill();
          });
        }
        const tex = new THREE.CanvasTexture(can);
        diceMaterials[f].map = tex;
      }
    };
    createDicePips([]);

    const dice = new THREE.Mesh(diceGeom, diceMaterials);
    dice.position.set(0, 0.45, 0); // Resting comfortably on center gold platform
    dice.castShadow = true;
    dice.receiveShadow = true;
    scene.add(dice);
    diceMeshRef.current = dice;

    // Build selectable token markers (Glossy marble rings / halos)
    // Responsive loop to render current pieces dynamically (initialized in animate)

    // WINDO RE-SIZED LISTENER
    const handleResize = () => {
      if (!containerRef.current || !renderer || !camera) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // MOUSE INTERACTION TO CHOOSE TOKENS
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handlePointerMove = (e: MouseEvent) => {
      if (!containerRef.current || !camera) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      // Token hover effects
      raycaster.setFromCamera(mouse, camera);
      const meshesList = Array.from(tokenMeshesRef.current.values()).map((g: THREE.Group) => g.children[0] as THREE.Mesh);
      const intersects = raycaster.intersectObjects(meshesList);

      if (intersects.length > 0) {
        const hoveredMesh = intersects[0].object as THREE.Mesh;
        const parentGroup = hoveredMesh.parent as THREE.Group;
        if (parentGroup) {
          const key = parentGroup.name; // color_id format
          hoverIntersectRef.current = key;
          document.body.style.cursor = 'pointer';
        }
      } else {
        hoverIntersectRef.current = null;
        document.body.style.cursor = 'default';
      }
    };

    const handlePointerDown = (e: MouseEvent) => {
      if (!containerRef.current || !camera) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      
      // If dice was clicked, and is rolling possible, we could trigger rolling?
      const intersectsDice = raycaster.intersectObject(dice);
      if (intersectsDice.length > 0 && !gameState.hasRolled && !gameState.isRollInProgress) {
        // Find main window and tap rolling
        const rollBtn = document.getElementById('ludo-dice-roll-trigger-elem');
        if (rollBtn) rollBtn.click();
        return;
      }

      const meshesList = Array.from(tokenMeshesRef.current.values()).map((g: THREE.Group) => g.children[0] as THREE.Mesh);
      const intersects = raycaster.intersectObjects(meshesList);

      if (intersects.length > 0) {
        const selectedMesh = intersects[0].object as THREE.Mesh;
        const parentGroup = selectedMesh.parent as THREE.Group;
        if (parentGroup) {
          const [color, idStr] = parentGroup.name.split('_');
          const tokenId = parseInt(idStr, 10);
          
          // Verify if this is active selectable token
          const actPlayer = gameState.players[gameState.currentPlayerIndex];
          if (color === actPlayer.color && selectableTokenIds.includes(tokenId)) {
            audio.playUIPress();
            onTokenClick(tokenId);
          }
        }
      }
    };

    const domEl = containerRef.current;
    domEl.addEventListener('mousemove', handlePointerMove);
    domEl.addEventListener('mousedown', handlePointerDown);

    // ANIMATION TICK LOOP
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Slow elegant visual orbit movement in Lobby
      if (gameState.gameStatus === 'lobby' && camera) {
        camera.position.x = Math.sin(elapsed * 0.18) * 11;
        camera.position.z = Math.cos(elapsed * 0.18) * 11;
        camera.lookAt(0, -0.6, 0);
      } else if (camera) {
        // Standard interactive isometric display configuration
        camera.position.set(0, 13.5, 10.5);
        camera.lookAt(0, -0.7, 0);
      }

      // Physics-based Dice Rolling Simulation setup
      if (diceAnimRef.current.active && dice) {
        const dAnim = diceAnimRef.current;
        dAnim.elapsed += delta;

        // Realistic decay bounce movement
        const rawProgress = dAnim.elapsed / dAnim.duration;
        const progress = Math.min(rawProgress, 1);

        // Height is parabolic bounce
        const hopCount = 2;
        const gravityCurve = Math.abs(Math.sin(progress * Math.PI * hopCount)) * (1.8 * (1 - progress));
        dice.position.y = 0.45 + gravityCurve;

        // Settle rolling rotations towards correct numeric face angles
        const mapFaceRotations: Record<number, [number, number, number]> = {
          1: [0, 0, 0],                            // face 1 (Z-up)
          6: [Math.PI, 0, 0],                      // face 6 (Z-reversed)
          2: [-Math.PI / 2, 0, 0],                 // face 2 (Y-aligned)
          5: [Math.PI / 2, 0, 0],                  // face 5
          3: [0, 0, Math.PI / 2],                  // face 3 (X-aligned)
          4: [0, 0, -Math.PI / 2]                  // face 4
        };

        const targetRot = mapFaceRotations[dAnim.targetValue] || [0, 0, 0];

        // Extreme spinning initially, smoothing out towards target
        const spinSpeed = 16 * (1 - progress);
        dice.rotation.x += dAnim.rx * spinSpeed * delta;
        dice.rotation.y += dAnim.ry * spinSpeed * delta;
        dice.rotation.z += dAnim.rz * spinSpeed * delta;

        if (progress >= 1.0) {
          dice.position.set(0, 0.45, 0);
          dice.rotation.set(...targetRot);
          dAnim.active = false;
          onDiceRollComplete();
        }
      }

      // Hover bouncy floating effect for tokens
      tokenMeshesRef.current.forEach((group, key) => {
        const [pColor, pIdStr] = key.split('_');
        const pId = parseInt(pIdStr, 10);
        const activePlayer = gameState.players[gameState.currentPlayerIndex];

        const isSelectable = pColor === activePlayer.color && selectableTokenIds.includes(pId);
        
        // Active tokens hover wave oscillation
        if (isSelectable) {
          group.position.y = 0.15 + Math.sin(elapsed * 12) * 0.14;
          // Scale pulsating halo glow
          const glowMesh = group.children[1];
          if (glowMesh) {
            const scale = 1.0 + Math.sin(elapsed * 8) * 0.15;
            glowMesh.scale.set(scale, 1, scale);
            glowMesh.visible = true;
          }
        } else {
          // Soft restore
          if (group.position.y > 0.05) {
            group.position.y = THREE.MathUtils.lerp(group.position.y, 0.0, 0.12);
          }
          const glowMesh = group.children[1];
          if (glowMesh) glowMesh.visible = false;
        }

        // Highlight token if actual mouse hovered
        if (hoverIntersectRef.current === key && isSelectable) {
          group.scale.set(1.15, 1.15, 1.15);
        } else {
          group.scale.set(1, 1, 1);
        }
      });

      // Parabolic Step-by-Step Hop Animations
      if (tokenMoveQueueRef.current) {
        const queue = tokenMoveQueueRef.current;
        const key = `${queue.color}_${queue.id}`;
        const group = tokenMeshesRef.current.get(key);

        if (group) {
          queue.stepProgress += delta * 6.5; // Jump speed

          if (queue.stepProgress >= 1.0) {
            // Step complete, trigger move click sound!
            audio.playMoveTick(queue.currentStepIdx + 1);

            queue.currentStepIdx++;
            queue.stepProgress = 0;

            if (queue.currentStepIdx >= queue.steps.length) {
              // Final arrival
              const lastPos = queue.steps[queue.steps.length - 1];
              group.position.set(lastPos[0], lastPos[1], lastPos[2]);
              tokenMoveQueueRef.current = null;
            }
          }

          if (tokenMoveQueueRef.current) {
            const currentHopStart = queue.steps[queue.currentStepIdx - 1] || [group.position.x, group.position.y, group.position.z];
            const currentHopEnd = queue.steps[queue.currentStepIdx];

            if (currentHopEnd) {
              // Symmetic lerping trajectory x-z
              const lx = THREE.MathUtils.lerp(currentHopStart[0], currentHopEnd[0], queue.stepProgress);
              const lz = THREE.MathUtils.lerp(currentHopStart[2], currentHopEnd[2], queue.stepProgress);
              
              // Parabolic height lift
              const archElevation = Math.sin(queue.stepProgress * Math.PI) * 0.95;
              const ly = THREE.MathUtils.lerp(currentHopStart[1], currentHopEnd[1], queue.stepProgress) + archElevation;
              
              group.position.set(lx, ly, lz);
            }
          }
        }
      }

      // Render star and victory particle systems
      particlesRef.current.forEach((pts, index) => {
        const posAttr = pts.geometry.attributes.position;
        const timeArray = pts.userData.times;
        const velocities = pts.userData.velocities;
        let remainsActive = false;

        const count = posAttr.count;
        for (let i = 0; i < count; i++) {
          timeArray[i] += delta;
          const t = timeArray[i];

          if (t < 1.5) {
            remainsActive = true;
            // Physics expand: vel_xyz + gravity pull
            let px = posAttr.getX(i) + velocities[i * 3] * delta;
            let py = posAttr.getY(i) + velocities[i * 3 + 1] * delta - 1.8 * delta * t; // gravity drop
            let pz = posAttr.getZ(i) + velocities[i * 3 + 2] * delta;

            posAttr.setXYZ(i, px, Math.max(py, 0.05), pz);
          }
        }
        posAttr.needsUpdate = true;

        if (!remainsActive) {
          scene.remove(pts);
          particlesRef.current.splice(index, 1);
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    // CLEANUP
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      domEl.removeEventListener('mousemove', handlePointerMove);
      domEl.removeEventListener('mousedown', handlePointerDown);
    };
  }, [gameState.currentPlayerIndex, gameState.gameStatus, selectableTokenIds, onDiceRollComplete]);

  // SPATIAL GRAPHICS UPDATE ON TOKEN POSITIONS
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    // Flush old meshes
    tokenMeshesRef.current.forEach(m => scene.remove(m));
    tokenMeshesRef.current.clear();

    const colorsMap: Record<PlayerColor, string> = {
      red: '#ef4444',
      green: '#10b981',
      yellow: '#f59e0b',
      blue: '#3b82f6'
    };

    // Rebuild all 16 Tokens to matching current coordinates
    gameState.players.forEach(p => {
      p.tokens.forEach(t => {
        // Pawn geometry
        const baseShape = new THREE.CylinderGeometry(0.3, 0.38, 0.15, 16);
        const middleShape = new THREE.SphereGeometry(0.24, 16, 16);
        const topCapShape = new THREE.SphereGeometry(0.18, 16, 16);

        const tokenGroup = new THREE.Group();
        tokenGroup.name = `${t.color}_${t.id}`;

        const materialToken = new THREE.MeshStandardMaterial({
          color: colorsMap[t.color],
          roughness: 0.12,
          metalness: 0.65
        });

        const mBase = new THREE.Mesh(baseShape, materialToken);
        mBase.castShadow = true;
        mBase.receiveShadow = true;
        
        const mMiddle = new THREE.Mesh(middleShape, materialToken);
        mMiddle.position.y = 0.22;
        mMiddle.castShadow = true;

        const mHead = new THREE.Mesh(topCapShape, materialToken);
        mHead.position.y = 0.44;
        mHead.castShadow = true;

        tokenGroup.add(mBase);
        tokenGroup.add(mMiddle);
        tokenGroup.add(mHead);

        // Neon Glow Halo Ring at bottom
        const ringGeom = new THREE.RingGeometry(0.42, 0.52, 16);
        ringGeom.rotateX(-Math.PI / 2);
        const haloMat = new THREE.MeshBasicMaterial({
          color: colorsMap[t.color],
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.72
        });
        const mRing = new THREE.Mesh(ringGeom, haloMat);
        mRing.position.y = 0.01;
        mRing.visible = false;
        tokenGroup.add(mRing);

        // Position lookup
        const coords = findTokenCoordinates(t);
        const [tx, ty, tz] = gridToVec3(coords[0], coords[1], 0.15);
        tokenGroup.position.set(tx, ty, tz);

        scene.add(tokenGroup);
        tokenMeshesRef.current.set(`${t.color}_${t.id}`, tokenGroup);
      });
    });
  }, [gameState.players]);

  // HELPERS TO FIND ACTUAL PATH CELL IN 2D GRID
  const findTokenCoordinates = (token: Token): [number, number] => {
    if (token.status === 'base') {
      return BASE_POCKETS[token.color][token.id];
    }
    if (token.status === 'home') {
      return CENTER_HOMES[token.color];
    }
    if (token.status === 'home_path') {
      return HOME_PATHS[token.color][token.position];
    }

    // Common Track Index Calculation
    const spawnIndex = START_OFFSETS[token.color];
    const absoluteIndex = (spawnIndex + token.position) % 52;
    return TRACK_COORDS[absoluteIndex];
  };

  // TRIGGER PHYSICAL-DICE ANIMATION
  useEffect(() => {
    if (gameState.isRollInProgress && !isRollingPrevRef.current) {
      audio.playDiceRoll();

      // Trigger 3D Dice tumbling rotation params
      diceAnimRef.current = {
        active: true,
        duration: 0.85,
        elapsed: 0,
        vx: (Math.random() - 0.5) * 8,
        vy: 7 + Math.random() * 4,
        vz: (Math.random() - 0.5) * 8,
        rx: 15 + Math.random() * 20,
        ry: 15 + Math.random() * 20,
        rz: 15 + Math.random() * 20,
        targetValue: gameState.diceValue || 1
      };
    }
    isRollingPrevRef.current = gameState.isRollInProgress;
  }, [gameState.isRollInProgress, gameState.diceValue]);

  // EXPLICIT TRIGGER HOP ANIMATION PATHWAY
  useEffect(() => {
    // Listen to changes in gameState players. If the current player moved, let's find if token moves
    // We get notifications of movement indices to hop smoothly
    // Wait, let's construct a small hook when players change position relative to old position
  }, [gameState.currentPlayerIndex]);

  // TRIGGER PARTICLE BURST SPELLS
  const triggerParticleBurst = (col: number, row: number, colorHex: string) => {
    const scene = sceneRef.current;
    if (!scene) return;

    const count = 35;
    const geom = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const times = new Float32Array(count);
    const vels: number[] = [];

    const [cx, cy, cz] = gridToVec3(col, row, 0.25);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = cx;
      positions[i * 3 + 1] = cy;
      positions[i * 3 + 2] = cz;

      times[i] = 0;
      
      // Expand in spherical velocity vector
      const phi = Math.random() * Math.PI * 2;
      const theta = Math.random() * Math.PI / 2; // Upper hemisphere focus
      const speed = 2 + Math.random() * 3.5;

      vels.push(
        Math.cos(phi) * Math.sin(theta) * speed,
        Math.cos(theta) * speed + 1,
        Math.sin(phi) * Math.sin(theta) * speed
      );
    }

    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    // Star shape particle material color
    const mat = new THREE.PointsMaterial({
      color: colorHex,
      size: 0.26,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });

    const points = new THREE.Points(geom, mat);
    points.userData = { times, velocities: vels };
    
    scene.add(points);
    particlesRef.current.push(points);
  };

  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-slate-950">
      {/* 3D Context Ref Element */}
      <div ref={containerRef} className="w-full h-full" id="ludo-board-3d-canvas-wrapper" />

      {/* Modern High-End Overlay Indicator details */}
      <div className="absolute top-4 left-4 z-10 glass-panel border border-white/10 px-4 py-2 rounded-xl flex items-center gap-3 shadow-lg pointer-events-none">
        <div className={`w-3 h-3 rounded-full animate-ping`} style={{ backgroundColor: PLAYER_COLORS[gameState.players[gameState.currentPlayerIndex].color] }} />
        <span className="text-xs tracking-wider text-slate-300 font-mono">
          TURN: <strong className="text-white capitalize">{gameState.players[gameState.currentPlayerIndex].name}</strong>
        </span>
      </div>

      {/* Hidden button trigger mapped from ThreeJS pointer interaction */}
      <button id="ludo-3d-particle-capturer" className="hidden" onClick={() => {
        // Test particle trigger
        triggerParticleBurst(7, 7, '#ffd700');
      }} />
    </div>
  );
}

const PLAYER_COLORS: Record<PlayerColor, string> = {
  red: '#ef4444',
  green: '#10b981',
  yellow: '#f59e0b',
  blue: '#3b82f6'
};
