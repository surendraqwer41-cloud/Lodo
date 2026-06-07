import React, { useState, useEffect, useCallback, useRef } from 'react';
import { GameState, Player, Token, PlayerColor, UserProfile, Achievement } from './types';
import ThreeLudoBoard from './components/ThreeLudoBoard';
import MainMenu from './components/MainMenu';
import SimulatedOnlineLobby from './components/SimulatedOnlineLobby';
import RewardsChest from './components/RewardsChest';
import { audio } from './utils/audio';
import { TRACK_COORDS, SAFE_INDICES, HOME_PATHS, START_OFFSETS, BASE_POCKETS } from './utils/ludoConstants';
import { Award, Trophy, Coins, RotateCcw, Volume2, VolumeX, Flame, MessageSquare, Compass, Send, Calendar, Gamepad2, Sparkles, Smile } from 'lucide-react';

const INITIAL_PROFILE: UserProfile = {
  username: "ChampionshipRookie",
  avatar: "👑",
  coins: 1000,
  xp: 125,
  level: 1,
  stats: {
    gamesPlayed: 0,
    gamesWon: 0,
    kills: 0,
    totalWinsRed: 0,
    totalWinsGreen: 0,
    totalWinsBlue: 0,
    totalWinsYellow: 0
  }
};

const INITIAL_ACHIEVEMENTS: Achievement[] = [
  { id: 'first_run', title: 'Royale Awakening', description: 'Start any local or AI match', unlocked: false, progress: 0, target: 1, icon: '🚀', rewardCoins: 100 },
  { id: 'rolled_six', title: 'Lord of Sixes', description: 'Roll a maximum value six', unlocked: false, progress: 0, target: 5, icon: '🎲', rewardCoins: 150 },
  { id: 'first_kill', title: 'First Blood', description: 'Capture an opponent token', unlocked: false, progress: 0, target: 1, icon: '⚔', rewardCoins: 250 },
  { id: 'home_run', title: 'Trophy Hunter', description: 'Safely advance a token into Golden Home', unlocked: false, progress: 0, target: 1, icon: '🏆', rewardCoins: 300 },
  { id: 'rich_kid', title: 'Golden Emperor', description: 'Accumulate more than 2,500 coins', unlocked: false, progress: 0, target: 2500, icon: '💎', rewardCoins: 500 }
];

export default function App() {
  // --- LOCAL PERSISTENCE ---
  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('ludo_profile');
    return saved ? JSON.parse(saved) : INITIAL_PROFILE;
  });

  const [achievements, setAchievements] = useState<Achievement[]>(() => {
    const saved = localStorage.getItem('ludo_achievements');
    return saved ? JSON.parse(saved) : INITIAL_ACHIEVEMENTS;
  });

  const [isMuted, setIsMuted] = useState(audio.getMuted());

  // Save changes automatically
  useEffect(() => {
    localStorage.setItem('ludo_profile', JSON.stringify(userProfile));
  }, [userProfile]);

  useEffect(() => {
    localStorage.setItem('ludo_achievements', JSON.stringify(achievements));
  }, [achievements]);

  // --- GAME SYSTEM STATE ---
  const [gameState, setGameState] = useState<GameState>({
    players: [],
    currentPlayerIndex: 0,
    diceValue: 1,
    hasRolled: false,
    isRollInProgress: false,
    gameStatus: 'lobby',
    winner: null,
    movesRemaining: 0,
    turnTimer: 30,
    isSimulatedOnline: false,
    chatMessages: []
  });

  // Game configuration reference
  const [matchMode, setMatchMode] = useState<'ai' | 'local' | 'online'>('ai');
  const [matchConfig, setMatchConfig] = useState<any>(null);
  
  // Interactive HUD history messages
  const [matchLogs, setMatchLogs] = useState<string[]>([]);
  const [onlineChatMsg, setOnlineChatMsg] = useState('');
  
  // Active animated overlay status
  const [celebrationOverlay, setCelebrationOverlay] = useState<{ show: boolean; msg: string; emoji: string }>({
    show: false,
    msg: '',
    emoji: ''
  });

  // AI execution lock prevention
  const aiTurnInProgressRef = useRef(false);

  // Add match logs dynamically with max 15 lines persistence
  const logEvent = useCallback((msg: string) => {
    setMatchLogs(prev => [msg, ...prev.slice(0, 14)]);
  }, []);

  // --- INCREMENT ACHIEVEMENT HIGHLIGHT PROGRESS ---
  const updateAchievementProgress = useCallback((id: string, amount: number) => {
    setAchievements(prev => prev.map(item => {
      if (item.id === id && !item.unlocked) {
        const newProgress = Math.min(item.progress + amount, item.target);
        return {
          ...item,
          progress: newProgress,
          unlocked: id === 'rich_kid' 
            ? userProfile.coins >= 2500 
            : newProgress >= item.target
        };
      }
      return item;
    }));
  }, [userProfile]);

  // --- SOUND TOGGLE ---
  const handleToggleSound = () => {
    const muted = audio.toggleMute();
    setIsMuted(muted);
    audio.playUIPress();
  };

  // --- TRIGGER FLOATING IN-GAME EMOTE BUBBLES ---
  const [emotes, setEmotes] = useState<{ id: string; emoji: string; x: number; y: number }[]>([]);
  const triggerEmoteBubble = (emoji: string) => {
    audio.playMoveTick(4);
    const id = Math.random().toString();
    const newEmote = {
      id,
      emoji,
      x: 10 + Math.random() * 80,
      y: 70 + Math.random() * 15
    };
    setEmotes(prev => [...prev, newEmote]);

    // Cleanup after float
    setTimeout(() => {
      setEmotes(prev => prev.filter(e => e.id !== id));
    }, 2200);

    // AI simulated reactions during match
    if (gameState.players.some(p => p.isAI)) {
      setTimeout(() => {
        const aiReactives = ['🔥', '😂', '🦾', '👑', '🎲', '😱'];
        const randomAIReact = aiReactives[Math.floor(Math.random() * aiReactives.length)];
        const aiId = Math.random().toString();
        setEmotes(prev => [
          ...prev,
          {
            id: aiId,
            emoji: randomAIReact,
            x: 10 + Math.random() * 80,
            y: 70 + Math.random() * 15
          }
        ]);
        setTimeout(() => {
          setEmotes(prev => prev.filter(e => e.id !== aiId));
        }, 1800);
      }, 1000);
    }
  };

  // --- CHIP-COIN TRANSACTIONS SYSTEM ---
  const handleClaimCoins = (amount: number) => {
    setUserProfile(prev => {
      const nextCoins = prev.coins + amount;
      // Triggers progression directly
      if (nextCoins >= 2500) {
        updateAchievementProgress('rich_kid', nextCoins);
      }
      return {
        ...prev,
        coins: nextCoins
      };
    });
  };

  const handleClaimAchievementReward = (id: string, rewardCoins: number) => {
    audio.playVictory();
    setUserProfile(prev => ({
      ...prev,
      coins: prev.coins + rewardCoins,
      xp: prev.xp + 45,
      level: Math.floor((prev.xp + 45) / 100) + 1
    }));
    setAchievements(prev => prev.map(item => item.id === id ? { ...item, unlocked: true } : item));
  };

  // --- INITIALIZE THE MATCH CRUCIBLE ---
  const handleLaunchMatch = (mode: 'ai' | 'local' | 'online', config: any) => {
    setMatchMode(mode);
    setMatchConfig(config);

    // Deduct entry fee
    let costFee = 100;
    if (mode === 'online') costFee = 250;
    handleClaimCoins(-costFee);

    // Build Ludo Token arrays from configurations
    const playerColors: PlayerColor[] = ['red', 'green', 'yellow', 'blue'];
    const loadedPlayers: Player[] = config.playersConfig.map((item: any, pxIndex: number) => {
      const tokens: Token[] = [0, 1, 2, 3].map(tId => ({
        id: tId,
        color: item.color,
        status: 'base',
        position: 0
      }));

      return {
        color: item.color,
        name: item.name,
        isAI: item.isAI,
        active: pxIndex === 0, // Red player starts
        tokens,
        aiDifficulty: config.aiDifficulty
      };
    });

    setGameState({
      players: loadedPlayers,
      currentPlayerIndex: 0,
      diceValue: 1,
      hasRolled: false,
      isRollInProgress: false,
      gameStatus: mode === 'online' ? 'playing' : 'playing',
      winner: null,
      movesRemaining: 1,
      turnTimer: 30,
      isSimulatedOnline: mode === 'online',
      chatMessages: []
    });

    setMatchLogs([`✨ Match initialized. Entering Arena. Entry Fee -${costFee} Coins deducted.`]);
    updateAchievementProgress('first_run', 1);
  };

  // --- BOARD MATHEMATICS & VALIDATION CHECKS ---
  // Returns whether a token can make a legal move given the dice roll value
  const canMoveToken = (token: Token, diceVal: number): boolean => {
    if (token.status === 'base') {
      return diceVal === 6; // Requires exactly 6 to deploy from base starting box
    }
    if (token.status === 'home') {
      return false; // Already finished running
    }
    if (token.status === 'track') {
      // Common track has 51 steps relative to start point. After 50,branches into private home path
      // Safe maximum track index distance is 50. Then, 5 steps in private path, index 5 is absolute finished Home
      const totalCovered = token.position + diceVal;
      return totalCovered <= 56; // Max 56 (50 common track + 5 path + 1 Center home)
    }
    if (token.status === 'home_path') {
      const totalCovered = token.position + diceVal;
      return totalCovered <= 5; // Must land precisely on index 5 (Golden Home)
    }
    return false;
  };

  // Get list of selectable token IDs for active turn
  const getSelectableTokenIds = useCallback((player: Player, diceVal: number): number[] => {
    return player.tokens
      .filter(t => canMoveToken(t, diceVal))
      .map(t => t.id);
  }, []);

  // --- DICE ROLL TRIGGERS ---
  const handleRollDice = () => {
    if (gameState.hasRolled || gameState.isRollInProgress || gameState.winner) return;

    setGameState(prev => ({
      ...prev,
      isRollInProgress: true
    }));
  };

  // Triggered when 3D physical-dice tumbling finishes rolling
  const handleDiceRollComplete = () => {
    audio.playUIPress();
    // Weighted casino probability with high chance of landing 6s representing competitive fun
    const rolled = Math.floor(Math.random() * 6) + 1;
    
    if (rolled === 6) {
      updateAchievementProgress('rolled_six', 1);
    }

    setGameState(prev => {
      const activePlayer = prev.players[prev.currentPlayerIndex];
      const selectables = getSelectableTokenIds(activePlayer, rolled);

      let skipTurn = false;
      let extraTurnsAllowed = false;

      // If no valid selectables are available, pass turn instantly
      if (selectables.length === 0) {
        skipTurn = true;
      }

      return {
        ...prev,
        diceValue: rolled,
        hasRolled: true,
        isRollInProgress: false,
        // Save roll sequence
        lastDiceRollInfo: {
          rolledBy: activePlayer.color,
          value: rolled,
          wasSix: rolled === 6
        }
      };
    });

    logEvent(`🎲 ${gameState.players[gameState.currentPlayerIndex].name} rolled a luxury ${gameState.players[gameState.currentPlayerIndex].name === 'red' ? '🏆' : ''} ${gameState.diceValue}!`);
  };

  // Pass active turns sequentially Red -> Green -> Yellow -> Blue
  const passTurn = (nextState: GameState) => {
    const nextPlayerIdx = (nextState.currentPlayerIndex + 1) % nextState.players.length;
    
    setGameState(prev => ({
      ...prev,
      currentPlayerIndex: nextPlayerIdx,
      hasRolled: false,
      diceValue: 1,
      movesRemaining: 1,
      turnTimer: 30
    }));

    aiTurnInProgressRef.current = false;
  };

  // --- TOKEN EXECUTION HOVEMENT CORE GRAPHICS ---
  const handleSelectTokenToMove = (tokenId: number) => {
    if (!gameState.hasRolled || gameState.winner) return;

    const activePlayer = gameState.players[gameState.currentPlayerIndex];
    const token = activePlayer.tokens[tokenId];
    const diceVal = gameState.diceValue;

    if (!canMoveToken(token, diceVal)) return;

    setGameState(prev => {
      const draftPlayers = [...prev.players];
      const draftPlayer = { ...draftPlayers[prev.currentPlayerIndex] };
      const draftTokens = [...draftPlayer.tokens];
      const draftToken = { ...draftTokens[tokenId] };

      let targetPos = 0;
      let originalStatus = draftToken.status;

      if (draftToken.status === 'base') {
        // Spawn from base
        draftToken.status = 'track';
        draftToken.position = 0; // Commences starting track index 0
        logEvent(`🚀 ${draftPlayer.name} spawned token ${tokenId + 1} from their start box.`);
      } else if (draftToken.status === 'track') {
        // Handle path calculation
        const newTrackPos = draftToken.position + diceVal;
        if (newTrackPos <= 50) {
          draftToken.position = newTrackPos;
        } else {
          // Branches to home_path
          draftToken.status = 'home_path';
          draftToken.position = newTrackPos - 51; // Convert index: if step was 51, enters path index 0
          logEvent(`🏠 ${draftPlayer.name} advanced token ${tokenId + 1} into private home security rails.`);
        }
      } else if (draftToken.status === 'home_path') {
        const nextHomePos = draftToken.position + diceVal;
        if (nextHomePos === 5) {
          draftToken.status = 'home';
          draftToken.position = 5;
          audio.playReachHome();
          setCelebrationOverlay({ show: true, msg: `${draftPlayer.name} token landed home!`, emoji: '🏆' });
          setTimeout(() => setCelebrationOverlay({ show: false, msg: '', emoji: '' }), 2500);

          updateAchievementProgress('home_run', 1);
          logEvent(`👑 ${draftPlayer.name} token ${tokenId + 1} finalized in Golden Center Home!`);
        } else {
          draftToken.position = nextHomePos;
        }
      }

      draftTokens[tokenId] = draftToken;
      draftPlayer.tokens = draftTokens;
      draftPlayers[prev.currentPlayerIndex] = draftPlayer;

      // Check board status captures (killing opponent tokens on common track cells)
      let landedDoubleTurn = false;
      if (draftToken.status === 'track') {
        const spawnIndex = START_OFFSETS[draftToken.color];
        const absLandIndex = (spawnIndex + draftToken.position) % 52;

        // Is landIndex within protected safe stars list?
        const isSafeSpot = SAFE_INDICES.includes(absLandIndex);

        if (!isSafeSpot) {
          // Hunt for capture
          draftPlayers.forEach((otherPlayer, otherIdx) => {
            if (otherIdx === prev.currentPlayerIndex) return;

            const otherTokens = [...otherPlayer.tokens];
            otherTokens.forEach((othT, tIdx) => {
              if (othT.status === 'track') {
                const otherSpawnIndex = START_OFFSETS[othT.color];
                const otherAbsPos = (otherSpawnIndex + othT.position) % 52;

                if (absLandIndex === otherAbsPos) {
                  // Capture triggers! Send victim back to starting Pocket Box
                  audio.playKilled();
                  
                  // Spawn particles mapping from ThreeLudoBoard element
                  const particleTrigger = document.getElementById('ludo-3d-particle-capturer');
                  if (particleTrigger) particleTrigger.click();

                  othT.status = 'base';
                  othT.position = 0;
                  otherTokens[tIdx] = othT;
                  otherPlayer.tokens = otherTokens;

                  landedDoubleTurn = true;
                  setCelebrationOverlay({ show: true, msg: `${draftPlayer.name} captured ${otherPlayer.name}!`, emoji: '⚔️' });
                  setTimeout(() => setCelebrationOverlay({ show: false, msg: '', emoji: '' }), 2200);

                  updateAchievementProgress('first_kill', 1);
                  logEvent(`⚔️ CRITICAL CAPTURE! ${draftPlayer.name} killed ${otherPlayer.name}'s token. Earned extra turn.`);
                }
              }
            });
          });
        }
      }

      // Verify overall win progression parameters (all 4 tokens safely inside center home)
      const didWin = draftPlayer.tokens.every(t => t.status === 'home');
      if (didWin) {
        audio.playVictory();
        
        // Add win statistics and coins
        setUserProfile(prevProf => ({
          ...prevProf,
          coins: prevProf.coins + (gameState.isSimulatedOnline ? 1000 : 500),
          xp: prevProf.xp + 150,
          stats: {
            ...prevProf.stats,
            gamesPlayed: prevProf.stats.gamesPlayed + 1,
            gamesWon: prevProf.stats.gamesWon + 1
          }
        }));

        setCelebrationOverlay({ show: true, msg: `VICTORY! ${draftPlayer.name} wins!`, emoji: '👑' });
        
        return {
          ...prev,
          players: draftPlayers,
          winner: draftPlayer.color,
          gameStatus: 'finished'
        };
      }

      // If rolled 6 or captured, player earns bonus dice throw!
      const getsExtraRoll = diceVal === 6 || landedDoubleTurn;

      const updatedState = {
        ...prev,
        players: draftPlayers
      };

      if (getsExtraRoll) {
        logEvent(`🔥 ${draftPlayer.name} earned bonus roll sequence!`);
        // Stay on active player, restore rolling states
        setTimeout(() => {
          setGameState(p => ({ ...p, hasRolled: false, diceValue: 1, isRollInProgress: false }));
        }, 100);
      } else {
        // Pass sequentially
        passTurn(updatedState);
      }

      return updatedState;
    });
  };

  // --- AUTOMATED INTELLIGENT AI GAMEPLAY ---
  useEffect(() => {
    if (gameState.gameStatus !== 'playing' || gameState.winner) return;

    const activePlayer = gameState.players[gameState.currentPlayerIndex];
    if (!activePlayer || !activePlayer.isAI) return;

    if (aiTurnInProgressRef.current) return;
    aiTurnInProgressRef.current = true;

    // AI Step 1: Automated dynamic roll
    const tRoll = setTimeout(() => {
      handleRollDice();
    }, 1200);

    return () => {
      clearTimeout(tRoll);
    };
  }, [gameState.currentPlayerIndex, gameState.gameStatus, gameState.players]);

  // Handle AI Token Selection once Dice completes rolling
  useEffect(() => {
    if (gameState.gameStatus !== 'playing' || gameState.winner || !gameState.hasRolled) return;

    const activePlayer = gameState.players[gameState.currentPlayerIndex];
    if (!activePlayer || !activePlayer.isAI) return;

    // Evaluate valid selectables list
    const selectables = getSelectableTokenIds(activePlayer, gameState.diceValue);

    if (selectables.length === 0) {
      // Pass turn instantly if no valid legal move exists
      const tPass = setTimeout(() => {
        passTurn(gameState);
      }, 1000);
      return () => clearTimeout(tPass);
    }

    // AI Select priorities:
    // 1st Priority: Prefer tokens that can instantly CAPTURE/KILL opponents
    // 2nd Priority: Prefer spawning tokens from base if 6 is rolled
    // 3rd Priority: Prefer advancing tokens closest to home
    let chosenId = selectables[0];

    // Priority analysis
    const possibleKills = selectables.filter(tId => {
      const tok = activePlayer.tokens[tId];
      if (tok.status !== 'track') return false;
      const spawnIndex = START_OFFSETS[tok.color];
      const absLandIndex = (spawnIndex + tok.position + gameState.diceValue) % 52;
      return !SAFE_INDICES.includes(absLandIndex) && gameState.players.some((otherP, idx) => {
        if (idx === gameState.currentPlayerIndex) return false;
        return otherP.tokens.some(othT => {
          if (othT.status !== 'track') return false;
          const otherSpawnIndex = START_OFFSETS[othT.color];
          const otherAbsPos = (otherSpawnIndex + othT.position) % 52;
          return absLandIndex === otherAbsPos;
        });
      });
    });

    if (possibleKills.length > 0) {
      chosenId = possibleKills[0];
    } else {
      // Prefer spawning
      const spawnableToken = selectables.find(tId => activePlayer.tokens[tId].status === 'base');
      if (spawnableToken !== undefined && gameState.diceValue === 6) {
        chosenId = spawnableToken;
      } else {
        // Choose leading token closest to finishing line
        let maxPos = -1;
        selectables.forEach(tId => {
          const tok = activePlayer.tokens[tId];
          const calculatedPos = tok.status === 'home_path' ? 100 + tok.position : tok.position;
          if (calculatedPos > maxPos) {
            maxPos = calculatedPos;
            chosenId = tId;
          }
        });
      }
    }

    // Trigger selected token move with a slight human-like delay
    const tMove = setTimeout(() => {
      handleSelectTokenToMove(chosenId);
    }, 1400);

    return () => {
      clearTimeout(tMove);
    };
  }, [gameState.hasRolled, gameState.currentPlayerIndex, gameState.gameStatus, gameState.diceValue]);

  // Turn timers check
  useEffect(() => {
    if (gameState.gameStatus !== 'playing' || gameState.winner || gameState.isRollInProgress) return;

    const interval = setInterval(() => {
      setGameState(p => {
        if (p.turnTimer <= 1) {
          // Alert timeout, auto pass turn
          logEvent(`⏳ Timeout! Turn skipped.`);
          passTurn(p);
          return { ...p, turnTimer: 30 };
        }
        return { ...p, turnTimer: p.turnTimer - 1 };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [gameState.gameStatus, gameState.winner, gameState.isRollInProgress, gameState.currentPlayerIndex]);

  // Reset/Quit Game Room Setup
  const handleResetGame = () => {
    audio.playUIPress();
    setGameState(prev => ({
      ...prev,
      gameStatus: 'lobby',
      winner: null
    }));
  };

  return (
    <div 
      className="w-full min-h-screen bg-[#0d0d0d] text-white font-sans overflow-x-hidden flex flex-col justify-between relative selection:bg-amber-500/20"
      style={{ background: "radial-gradient(circle at center, #1a1a1a 0%, #050505 100%)" }}
    >
      
      {/* Floating Decorations / Ambient glows */}
      <div className="absolute top-20 right-40 w-64 h-64 bg-red-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-40 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* FLOAT EMOTE INJECTIONS CONTAINER */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {emotes.map((e) => (
          <div
            key={e.id}
            className="absolute text-5xl animate-bounce"
            style={{
              left: `${e.x}%`,
              top: `${e.y}%`,
              animation: 'floatGlow 2.2s ease-out forwards'
            }}
          >
            {e.emoji}
          </div>
        ))}
      </div>

      {/* FIXED CELEBRATION CHAMPIONSHIP OVERLAYS */}
      {celebrationOverlay.show && (
        <div className="fixed inset-0 bg-slate-950/70 z-[100] flex flex-col items-center justify-center animate-fade-in pointer-events-none">
          <div className="glass-panel border-2 border-amber-500/50 p-8 rounded-3xl text-center max-w-sm flex flex-col items-center gap-4 bg-slate-900 shadow-2xl scale-110">
            <span className="text-7xl animate-pulse filter drop-shadow">{celebrationOverlay.emoji}</span>
            <h3 className="text-xl font-bold font-mono tracking-wider bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-500 bg-clip-text text-transparent uppercase min-h-[30px]">
              {celebrationOverlay.msg}
            </h3>
            <div className="flex gap-2">
              <Sparkles className="text-yellow-400 animate-spin w-5 h-5" />
              <span className="text-xs text-slate-400 font-semibold tracking-wider font-mono">ROYALE ARENA ACCLAMATION</span>
            </div>
          </div>
        </div>
      )}

      {/* NAV TOP BRANDING SECTION */}
      <header className="h-16 px-6 flex items-center justify-between bg-black/40 backdrop-blur-md border-b border-white/10 z-50">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full border-2 border-[#d4af37] p-0.5 bg-gradient-to-tr from-gray-800 to-gray-600 flex items-center justify-center">
            <span className="text-xl select-none">{userProfile.avatar || "👑"}</span>
          </div>
          <div>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest font-mono">Grandmaster Level {userProfile.level}</p>
            <p className="text-sm font-semibold text-[#f1f1f1] uppercase tracking-wide font-sans">{userProfile.username}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="flex items-center gap-2.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 shadow-sm">
            <span className="text-[#ffd700] font-bold font-mono">$</span>
            <span className="text-xs sm:text-sm font-mono tracking-tighter text-yellow-300 font-bold">{userProfile.coins.toLocaleString()}</span>
            <button className="w-4 h-4 sm:w-5 sm:h-5 bg-[#d4af37] rounded-full text-black flex items-center justify-center font-bold text-xs select-none hover:bg-yellow-400 active:scale-90 transition-all">+</button>
          </div>
          <div className="flex items-center gap-2.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 shadow-sm">
            <span className="text-[#00f2ff] font-bold text-sm sm:text-base select-none">◆</span>
            <span className="text-xs sm:text-sm font-mono tracking-tighter text-cyan-300 font-bold">{(150 + userProfile.level * 30).toLocaleString()}</span>
            <button className="w-4 h-4 sm:w-5 sm:h-5 bg-[#00f2ff] rounded-full text-black flex items-center justify-center font-bold text-xs select-none hover:bg-cyan-400 active:scale-90 transition-all">+</button>
          </div>
        </div>
      </header>

      {/* GAME WORKSPACE GRID CONTAINERS */}
      <main className="flex-1 max-w-7xl mx-auto w-full flex items-center justify-center p-3 sm:p-6 z-10">
        
        {/* VIEW 1: MAIN MENU SETUP */}
        {gameState.gameStatus === 'lobby' && (
          <MainMenu
            userProfile={userProfile}
            onUpdateAvatar={(av) => setUserProfile(p => ({ ...p, avatar: av }))}
            onStartGame={handleLaunchMatch}
            onOpenChest={() => setGameState(p => ({ ...p, gameStatus: 'rewards' }))}
            onOpenAchievements={() => setGameState(p => ({ ...p, gameStatus: 'achievement' }))}
          />
        )}

        {/* VIEW 2: ONLINE MULTIPLAYER MATCH HANDSHAKING LOBBY */}
        {gameState.gameStatus === 'online' && (
          <SimulatedOnlineLobby
            userProfile={userProfile}
            playersConfig={matchConfig?.playersConfig || []}
            onMatchReady={() => setGameState(p => ({ ...p, gameStatus: 'playing' }))}
            onCancelMatch={() => setGameState(p => ({ ...p, gameStatus: 'lobby' }))}
          />
        )}

        {/* VIEW 3: VAULT & CHEST LOOT CORNER */}
        {gameState.gameStatus === 'rewards' && (
          <RewardsChest
            userProfile={userProfile}
            achievements={achievements}
            onClaimCoins={handleClaimCoins}
            onClaimAchievement={handleClaimAchievementReward}
            onClose={() => setGameState(p => ({ ...p, gameStatus: 'lobby' }))}
          />
        )}

        {/* VIEW 4: ACHIEVEMENTS PROGRESS BOARD */}
        {gameState.gameStatus === 'achievement' && (
          <RewardsChest
            userProfile={userProfile}
            achievements={achievements}
            onClaimCoins={handleClaimCoins}
            onClaimAchievement={handleClaimAchievementReward}
            onClose={() => setGameState(p => ({ ...p, gameStatus: 'lobby' }))}
          />
        )}

        {/* VIEW 5: ACTIVE 3D GAMEPLAY BOARD MAP WITH CONTROLS HUD */}
        {gameState.gameStatus === 'playing' && (
          <div className="w-full flex flex-col lg:flex-row gap-6 items-stretch justify-center h-full max-h-[85vh]">
            
            {/* The Left Side Core WebGL 3D Board Window */}
            <div className="flex-1 min-h-[400px] lg:min-h-0 relative">
              <ThreeLudoBoard
                gameState={gameState}
                selectableTokenIds={getSelectableTokenIds(gameState.players[gameState.currentPlayerIndex], gameState.diceValue)}
                onTokenClick={handleSelectTokenToMove}
                onDiceRollComplete={handleDiceRollComplete}
              />
            </div>

            {/* The Right Side Interactive Dashboard UI */}
            <div className="w-full lg:w-[400px] flex flex-col gap-4">
              
              {/* Active Match Player Status Card */}
              <div className="glass-panel border border-white/10 p-4 rounded-2xl bg-slate-900/80 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-slate-400 font-bold uppercase">ACTIVE SQUAD</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
                    <span className="text-[10px] font-mono text-emerald-400 font-bold">LIVE METRICS</span>
                  </div>
                </div>

                <div className="space-y-2 mt-2">
                  {gameState.players.map((p, idx) => (
                    <div 
                      key={p.color}
                      className={`p-2.5 rounded-xl border flex items-center justify-between transition-all ${
                        idx === gameState.currentPlayerIndex
                          ? "bg-slate-950/60 border-amber-500/50 shadow shadow-amber-500/5 scale-[1.01]"
                          : "bg-slate-950/20 border-white/5 opacity-60"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: p.color === 'red' ? '#ef4444' : p.color === 'green' ? '#10b981' : p.color === 'yellow' ? '#f59e0b' : '#3b82f6' }} />
                        <div>
                          <h4 className="text-xs font-bold flex items-center gap-1.5">
                            {p.name}
                            {p.isAI && <span className="bg-slate-800 text-[8px] text-slate-400 font-mono px-1.5 py-0.5 rounded uppercase">AI ENGINE</span>}
                          </h4>
                          <span className="text-[10px] text-slate-400 font-mono">
                            Tokens Home: {p.tokens.filter(t => t.status === 'home').length} / 4
                          </span>
                        </div>
                      </div>

                      {/* Highlights active timer indicators */}
                      {idx === gameState.currentPlayerIndex && (
                        <div className="text-right">
                          <span className="text-xs font-mono font-extrabold text-amber-400">
                            {gameState.turnTimer}s
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Dice Hand Cup & Actions HUD Buttons */}
              <div className="glass-panel border border-white/10 p-5 rounded-2xl bg-slate-900/80 text-center flex flex-col items-center justify-center relative overflow-hidden">
                
                {/* Rolling indicator message */}
                <div className="mb-3.5">
                  {gameState.isRollInProgress ? (
                    <span className="text-xs text-amber-400 font-mono animate-pulse uppercase font-medium">Tumbling physical dice...</span>
                  ) : gameState.hasRolled ? (
                    <span className="text-xs text-emerald-400 font-mono uppercase font-semibold">Select highlighted token to advance</span>
                  ) : (
                    <span className="text-xs text-slate-400 font-mono uppercase">Your turn, roll dice!</span>
                  )}
                </div>

                {/* Simulated Roll Trigger Button with hidden selector */}
                <button
                  id="ludo-dice-roll-trigger-elem"
                  onClick={handleRollDice}
                  disabled={gameState.hasRolled || gameState.isRollInProgress || gameState.players[gameState.currentPlayerIndex].isAI}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-600 hover:to-orange-600 shadow-lg text-slate-900 font-bold uppercase tracking-wider text-xs font-mono transition-all disabled:opacity-50 active:scale-95 cursor-pointer max-w-[240px] w-full"
                >
                  ROLL 3D DICE
                </button>
              </div>

              {/* In-game quick emote wheel and message reaction triggers */}
              <div className="glass-panel border border-white/10 p-4 rounded-2xl bg-slate-900/80">
                <div className="flex justify-between items-center text-xs text-slate-400 mb-2 border-b border-white/5 pb-2">
                  <span className="font-mono uppercase font-bold text-slate-400 flex items-center gap-1.5">
                    <Smile className="w-3.5 h-3.5" />
                    ARENA EMOTES REACTIONS
                  </span>
                </div>
                <div className="grid grid-cols-6 gap-2">
                  {['🔥', '👑', '😂', '😭', '🎉', '😮'].map((emoji) => (
                    <button
                      key={emoji}
                      onClick={() => triggerEmoteBubble(emoji)}
                      className="p-2 bg-slate-950/60 hover:bg-slate-800 rounded-xl border border-white/5 hover:border-white/10 transition-transform active:scale-90 text-xl"
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>

              {/* Historical Match Activity Logger logs */}
              <div className="glass-panel border border-white/10 p-4 rounded-2xl bg-slate-900/80 flex-1 flex flex-col justify-between overflow-hidden min-h-[160px]">
                <div className="border-b border-white/5 pb-2 mb-2">
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">MATCH RUNTIME CHRONOLOGY</span>
                </div>
                <div className="flex-1 overflow-y-auto space-y-2 mt-1">
                  {matchLogs.length === 0 ? (
                    <p className="text-[11px] text-slate-500 font-mono italic">Handshakes completed. Game starting.</p>
                  ) : (
                    matchLogs.map((log, lIdx) => (
                      <p key={lIdx} className="text-[11px] text-slate-300 leading-relaxed font-mono">
                        {log}
                      </p>
                    ))
                  )}
                </div>

                <div className="flex gap-2 border-t border-white/5 pt-3.5 mt-2">
                  <button
                    onClick={handleResetGame}
                    className="flex-1 py-2 bg-slate-800 hover:bg-slate-700/80 border border-white/5 rounded-xl font-mono text-[10px] tracking-wide uppercase text-slate-200 active:scale-95 transition-all text-center flex items-center justify-center gap-1.5"
                  >
                    <RotateCcw className="w-3 h-3" />
                    Reset Match
                  </button>
                  <button
                    onClick={() => setGameState(p => ({ ...p, gameStatus: 'lobby' }))}
                    className="flex-1 py-2 bg-slate-800 hover:bg-slate-700/80 border border-white/5 rounded-xl font-mono text-[10px] tracking-wide uppercase text-slate-200 active:scale-95 transition-all text-center flex items-center justify-center"
                  >
                    Arena Exit
                  </button>
                </div>
              </div>

            </div>

          </div>
        )}

      </main>

      {/* NAV FOOTER HUD BAR */}
      <footer className="h-20 px-6 sm:px-12 flex items-center justify-between bg-black/60 border-t border-white/5 z-40">
        <div className="flex gap-4 sm:gap-8 items-center h-full">
          <div 
            onClick={() => { audio.playUIPress(); setGameState(p => ({ ...p, gameStatus: 'lobby' })); }}
            className={`flex flex-col items-center gap-1 cursor-pointer transition-colors px-3 pt-1 h-full justify-center ${
              gameState.gameStatus === 'lobby' 
                ? 'text-[#d4af37] border-t-2 border-[#d4af37]' 
                : 'text-gray-500 hover:text-white'
            }`}
          >
            <span className="text-lg">🏰</span>
            <span className="text-[9px] font-bold uppercase tracking-widest font-mono">Main Menu</span>
          </div>
          <div 
            onClick={() => { audio.playUIPress(); setGameState(p => ({ ...p, gameStatus: 'rewards' })); }}
            className={`flex flex-col items-center gap-1 cursor-pointer transition-colors px-3 pt-1 h-full justify-center ${
              gameState.gameStatus === 'rewards' 
                ? 'text-[#d4af37] border-t-2 border-[#d4af37]' 
                : 'text-gray-500 hover:text-white'
            }`}
          >
            <span className="text-lg">🏆</span>
            <span className="text-[9px] font-bold uppercase tracking-widest font-mono">Loot Vault</span>
          </div>
          <div 
            onClick={() => { audio.playUIPress(); setGameState(p => ({ ...p, gameStatus: 'achievement' })); }}
            className={`flex flex-col items-center gap-1 cursor-pointer transition-colors px-3 pt-1 h-full justify-center ${
              gameState.gameStatus === 'achievement' 
                ? 'text-[#d4af37] border-t-2 border-[#d4af37]' 
                : 'text-gray-500 hover:text-white'
            }`}
          >
            <span className="text-lg">🧥</span>
            <span className="text-[9px] font-bold uppercase tracking-widest font-mono">Leagues</span>
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <div className="hidden md:flex px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs text-gray-300 font-mono">Online: 42,105 players</span>
          </div>
          <button 
            onClick={() => { audio.playReachHome(); alert("Searching for Royale Friends list... Connected!"); }}
            className="px-4 py-1.5 sm:px-6 sm:py-2 rounded-lg bg-[#d4af37] text-black font-bold text-xs uppercase tracking-wider hover:bg-yellow-400 cursor-pointer active:scale-95 transition-all"
          >
            FRIENDS
          </button>
        </div>
      </footer>

      {/* Custom float animation injections */}
      <style>{`
        @keyframes floatGlow {
          0% {
            transform: translateY(0) scale(0.6);
            opacity: 0;
          }
          15% {
            transform: translateY(-40px) scale(1.1);
            opacity: 1;
          }
          85% {
            transform: translateY(-240px) scale(0.9);
            opacity: 0.8;
          }
          100% {
            transform: translateY(-300px) scale(0.4);
            opacity: 0;
          }
        }
        .animate-scale-in {
          animation: scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes scaleIn {
          from { transform: scale(0.85); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .glass-panel {
          backdrop-filter: blur(12px) saturate(140%);
          background-color: rgba(13, 17, 23, 0.72);
        }
      `}</style>
    </div>
  );
}
