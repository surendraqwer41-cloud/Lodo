import { PlayerColor } from '../types';

export const TRACK_COORDS: [number, number][] = [
  [1, 6],   // 0: Red Start
  [2, 6],   // 1
  [3, 6],   // 2
  [4, 6],   // 3
  [5, 6],   // 4
  [6, 5],   // 5
  [6, 4],   // 6
  [6, 3],   // 7
  [6, 2],   // 8
  [6, 1],   // 9
  [6, 0],   // 10
  [7, 0],   // 11 (Top-center bridge)
  [8, 0],   // 12
  [8, 1],   // 13: Green Start
  [8, 2],   // 14
  [8, 3],   // 15
  [8, 4],   // 16
  [8, 5],   // 17
  [9, 6],   // 18
  [10, 6],  // 19
  [11, 6],  // 20
  [12, 6],  // 21
  [13, 6],  // 22
  [14, 6],  // 23
  [14, 7],  // 24 (Right-center bridge)
  [14, 8],  // 25
  [13, 8],  // 26: Yellow Start
  [12, 8],  // 27
  [11, 8],  // 28
  [10, 8],  // 29
  [9, 8],   // 30
  [8, 9],   // 31
  [8, 10],  // 32
  [8, 11],  // 33
  [8, 12],  // 34
  [8, 13],  // 35
  [8, 14],  // 36
  [7, 14],  // 37 (Bottom-center bridge)
  [6, 14],  // 38
  [6, 13],  // 39: Blue Start
  [6, 12],  // 40
  [6, 11],  // 41
  [6, 10],  // 42
  [6, 9],   // 43
  [5, 8],   // 44
  [4, 8],   // 45
  [3, 8],   // 46
  [2, 8],   // 47
  [1, 8],   // 48
  [0, 8],   // 49
  [0, 7],   // 50 (Left-center bridge)
  [0, 6]    // 51
];

// Start offsets relative to TRACK_COORDS
export const START_OFFSETS: Record<PlayerColor, number> = {
  red: 0,
  green: 13,
  yellow: 26,
  blue: 39
};

// Safe Spot indices in TRACK_COORDS (Stars on board)
// Star symbols protect players from getting killed
export const SAFE_INDICES = [0, 8, 13, 21, 26, 34, 39, 47];

// Home paths mapped up to the center [row, col]
export const HOME_PATHS: Record<PlayerColor, [number, number][]> = {
  red: [
    [1, 7], [2, 7], [3, 7], [4, 7], [5, 7]
  ],
  green: [
    [7, 1], [7, 2], [7, 3], [7, 4], [7, 5]
  ],
  yellow: [
    [13, 7], [12, 7], [11, 7], [10, 7], [9, 7]
  ],
  blue: [
    [7, 13], [7, 12], [7, 11], [7, 10], [7, 9]
  ]
};

// Map each color to the central Home area (where tokens complete the run)
export const CENTER_HOMES: Record<PlayerColor, [number, number]> = {
  red: [6, 7],
  green: [7, 6],
  yellow: [8, 7],
  blue: [7, 8]
};

export const BASE_POCKETS: Record<PlayerColor, [number, number][]> = {
  red: [
    [2, 2], [3, 2], [2, 3], [3, 3]
  ],
  green: [
    [11, 2], [12, 2], [11, 3], [12, 3]
  ],
  yellow: [
    [11, 11], [12, 11], [11, 12], [12, 12]
  ],
  blue: [
    [2, 11], [3, 11], [2, 12], [3, 12]
  ]
};

export const PLAYER_COLORS: Record<PlayerColor, string> = {
  red: '#ef4444',
  green: '#22c55e',
  yellow: '#eab308',
  blue: '#3b82f6'
};

export const PLAYER_NAMES: Record<PlayerColor, string> = {
  red: 'Imperial Red',
  green: 'Emerald Green',
  yellow: 'Solar Gold',
  blue: 'Royal Blue'
};

// Maps a 15x15 board coordinate [col, row] to a normalized -1 to 1 webgl vector
export function gridToVec3(col: number, row: number, height: number = 0): [number, number, number] {
  // Center is x=7, z=7. Scale by cellSize (say 1.2 units per cell)
  const cellSize = 1.0;
  const offsetX = (col - 7) * cellSize;
  const offsetZ = (row - 7) * cellSize;
  return [offsetX, height, offsetZ];
}
