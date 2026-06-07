export type PlayerColor = 'red' | 'green' | 'yellow' | 'blue';

export type TokenStatus = 'base' | 'track' | 'home_path' | 'home';

export interface Token {
  id: number;
  color: PlayerColor;
  status: TokenStatus;
  position: number; // 0-51 on common track, or 0-4 on home path
}

export interface Player {
  color: PlayerColor;
  name: string;
  isAI: boolean;
  active: boolean;
  tokens: Token[];
  aiDifficulty?: 'easy' | 'medium' | 'hard';
}

export interface GameState {
  players: Player[];
  currentPlayerIndex: number;
  diceValue: number;
  hasRolled: boolean;
  isRollInProgress: boolean;
  gameStatus: 'lobby' | 'playing' | 'settings' | 'achievement' | 'rewards' | 'finished';
  winner: PlayerColor | null;
  movesRemaining: number;
  turnTimer: number; // in seconds
  isSimulatedOnline: boolean;
  chatMessages: ChatMessage[];
  lastDiceRollInfo?: {
    rolledBy: PlayerColor;
    value: number;
    wasSix: boolean;
  };
}

export interface ChatMessage {
  id: string;
  sender: string;
  color: PlayerColor | 'system';
  message: string;
  timestamp: string;
}

export interface UserProfile {
  username: string;
  avatar: string;
  coins: number;
  xp: number;
  level: number;
  stats: {
    gamesPlayed: number;
    gamesWon: number;
    kills: number;
    totalWinsRed: number;
    totalWinsGreen: number;
    totalWinsBlue: number;
    totalWinsYellow: number;
  };
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  unlocked: boolean;
  progress: number;
  target: number;
  icon: string;
  rewardCoins: number;
}
