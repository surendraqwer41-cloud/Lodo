import React, { useState } from 'react';
import { PlayerColor, UserProfile } from '../types';
import { Trophy, Coins, Volume2, VolumeX, Shield, Play, Users, Bot, Gift, Star, Target, Settings, Crown } from 'lucide-react';
import { audio } from '../utils/audio';

interface MainMenuProps {
  userProfile: UserProfile;
  onUpdateAvatar: (avatar: string) => void;
  onStartGame: (mode: 'ai' | 'local' | 'online', config: {
    playerCount: number;
    aiDifficulty: 'easy' | 'medium' | 'hard';
    playersConfig: { name: string; isAI: boolean; color: PlayerColor }[];
  }) => void;
  onOpenChest: () => void;
  onOpenAchievements: () => void;
}

const AVATARS = [
  '👑', '🦁', '🦊', '🐼', '🦄', '🐲', '🧙‍♂️', '🥷', '🧑‍🚀', '👸', '💅', '🧛', '🛸', '🏎️', '💎', '🔥'
];

export default function MainMenu({
  userProfile,
  onUpdateAvatar,
  onStartGame,
  onOpenChest,
  onOpenAchievements
}: MainMenuProps) {
  const [activeTab, setActiveTab] = useState<'lobby' | 'profile' | 'modes'>('lobby');
  const [isMuted, setIsMuted] = useState(audio.getMuted());
  const [gameMode, setGameMode] = useState<'ai' | 'local' | 'online'>('ai');
  const [playerCount, setPlayerCount] = useState<number>(4);
  const [aiDifficulty, setAiDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');

  // Multi-player local custom names state
  const [localNames, setLocalNames] = useState<Record<PlayerColor, string>>({
    red: 'Imperial Red',
    green: 'Emerald Green',
    yellow: 'Solar Gold',
    blue: 'Royal Blue'
  });

  const handleStart = () => {
    audio.playUIPress();
    
    // Assemble players structure based on active configurations
    const colors: PlayerColor[] = ['red', 'green', 'yellow', 'blue'];
    const playersConfig = colors.slice(0, playerCount).map((col, idx) => {
      if (gameMode === 'ai') {
        return {
          name: idx === 0 ? userProfile.username : `Opponent Bot ${idx}`,
          isAI: idx !== 0,
          color: col
        };
      } else if (gameMode === 'local') {
        return {
          name: localNames[col] || `Player ${idx + 1}`,
          isAI: false,
          color: col
        };
      } else {
        // Online: Match user with 3 real-feeling live simulation personas
        return {
          name: idx === 0 ? userProfile.username : `ProPlayer_${Math.floor(Math.random() * 900 + 100)}`,
          isAI: idx !== 0, // In simulation, the engine drives secondary bots mirroring online network packets
          color: col
        };
      }
    });

    onStartGame(gameMode, {
      playerCount,
      aiDifficulty,
      playersConfig
    });
  };

  const toggleSound = () => {
    const muted = audio.toggleMute();
    setIsMuted(muted);
    audio.playUIPress();
  };

  const selectAvatar = (item: string) => {
    audio.playUIPress();
    onUpdateAvatar(item);
  };

  return (
    <div className="w-full max-w-4xl mx-auto min-h-[600px] flex flex-col md:flex-row gap-6 p-1 md:p-6 text-white font-sans">
      
      {/* LEFT PROFILE & STATUS COLUMN */}
      <div className="flex-1 flex flex-col gap-5 p-6 rounded-3xl border border-white/10 glass-panel shadow-2xl relative overflow-hidden bg-slate-900/80">
        
        {/* Floating Crown background */}
        <div className="absolute top-[-50px] right-[-50px] opacity-10 pointer-events-none rotate-12">
          <Crown size={220} className="text-yellow-400" />
        </div>

        {/* Brand identity */}
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 bg-gradient-to-tr from-amber-500 to-rose-500 rounded-xl shadow-lg shadow-rose-500/20">
            <Trophy className="text-white w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h1 className="text-lg font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-yellow-200 to-orange-400 uppercase font-mono">
              Ludo King Royale
            </h1>
            <p className="text-[10px] text-slate-400 tracking-widest uppercase font-mono">3D Luxury Cabin Edition</p>
          </div>
        </div>

        {/* User Card */}
        <div className="relative group bg-slate-950/60 p-4 rounded-2xl border border-white/5 flex items-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-600 to-yellow-400 p-0.5 flex items-center justify-center text-4xl shadow-md cursor-pointer hover:scale-105 transition-transform duration-300">
              {userProfile.avatar}
            </div>
            <span className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-amber-500 border-2 border-slate-950 flex items-center justify-center text-[10px] font-bold text-white shadow">
              {userProfile.level}
            </span>
          </div>

          <div className="flex-1">
            <h2 className="font-semibold text-base text-slate-100">{userProfile.username}</h2>
            <div className="flex items-center gap-1.5 text-xs text-amber-400 mt-1">
              <Coins className="w-4 h-4" />
              <span className="font-mono font-bold text-yellow-300 text-sm">
                {userProfile.coins.toLocaleString()}
              </span>
              <span className="text-[10px] text-slate-400 ml-1">Royale Coins</span>
            </div>
          </div>
        </div>

        {/* XP Level Progress Indicator */}
        <div className="bg-slate-950/40 p-3 rounded-xl border border-white/5">
          <div className="flex justify-between text-xs text-slate-400 mb-1.5 font-mono">
            <span>LEVEL PROGRESS</span>
            <span className="text-slate-200">{userProfile.xp % 100} / 100 XP</span>
          </div>
          <div className="w-full bg-slate-800/80 rounded-full h-2 overflow-hidden border border-white/5">
            <div 
              className="bg-gradient-to-r from-blue-400 to-indigo-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${userProfile.xp % 100}%` }}
            />
          </div>
        </div>

        {/* Quick Utilities / Rewards buttons */}
        <div className="grid grid-cols-2 gap-3 mt-1">
          <button 
            onClick={onOpenChest}
            className="flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-[#d4af37]/10 to-[#b8860b]/10 hover:from-[#d4af37]/20 hover:to-[#b8860b]/20 border border-[#d4af37]/30 hover:border-[#d4af37]/60 rounded-xl shadow-lg shadow-[#d4af37]/5 hover:scale-[1.02] active:scale-[0.98] transition-all text-xs font-mono font-bold text-[#d4af37] uppercase"
          >
            <Gift className="w-4 h-4 text-[#d4af37]" />
            Loot Chest
          </button>
          
          <button 
            onClick={onOpenAchievements}
            className="flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 hover:from-blue-500/20 hover:to-indigo-500/20 border border-blue-500/30 hover:border-blue-500/60 rounded-xl shadow-lg shadow-blue-500/5 hover:scale-[1.02] active:scale-[0.98] transition-all text-xs font-mono font-bold text-blue-300 uppercase"
          >
            <Star className="w-4 h-4 text-blue-400" />
            Achievements
          </button>
        </div>

        {/* Global Statistics Grid */}
        <div className="mt-2 bg-slate-950/40 p-4 rounded-2xl border border-white/5 flex-1 flex flex-col justify-between">
          <h3 className="text-xs font-semibold tracking-wider text-slate-400 uppercase font-mono border-b border-white/5 pb-2 mb-3">
            ROYALE CAREER STATS
          </h3>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-2 border border-white/5 rounded-xl bg-slate-950/50">
              <span className="block text-slate-400 text-[10px] uppercase font-mono">Played</span>
              <span className="text-lg font-bold font-mono text-slate-200">{userProfile.stats.gamesPlayed}</span>
            </div>
            <div className="p-2 border border-white/5 rounded-xl bg-slate-950/50">
              <span className="block text-slate-400 text-[10px] uppercase font-mono">Won</span>
              <span className="text-lg font-bold font-mono text-emerald-400">{userProfile.stats.gamesWon}</span>
            </div>
            <div className="p-2 border border-white/5 rounded-xl bg-slate-950/50">
              <span className="block text-slate-400 text-[10px] uppercase font-mono">Win Rate</span>
              <span className="text-lg font-bold font-mono text-sky-400">
                {userProfile.stats.gamesPlayed > 0 
                  ? `${Math.round((userProfile.stats.gamesWon / userProfile.stats.gamesPlayed) * 100)}%`
                  : '0%'
                }
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center mt-4 border-t border-white/5 pt-3">
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>PBR Anti-Cheat Ready</span>
            </div>

            <button 
              onClick={toggleSound}
              className="p-2 bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-200 rounded-xl transition-all border border-white/5 flex items-center justify-center"
              title="Toggle Audio Synthesizer"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
            </button>
          </div>
        </div>

      </div>

      {/* RIGHT GAME PLAY CONFIG CONSOLE COLUMN */}
      <div className="flex-[1.4] flex flex-col gap-5 p-6 rounded-3xl border border-white/10 glass-panel shadow-2xl bg-slate-900/80">
        
        {/* Play Navigation Tabs */}
        <div className="grid grid-cols-3 gap-2 bg-slate-950/60 p-1.5 rounded-2xl border border-white/5">
          <button
            onClick={() => { audio.playUIPress(); setActiveTab('lobby'); }}
            className={`py-2 px-3 text-xs font-bold rounded-xl tracking-wider transition-all uppercase font-mono ${
              activeTab === 'lobby' || activeTab === 'modes'
                ? 'bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            PLAY ROOM
          </button>
          <button
            onClick={() => { audio.playUIPress(); setActiveTab('profile'); }}
            className={`py-2 px-3 text-xs font-bold rounded-xl tracking-wider transition-all uppercase font-mono ${
              activeTab === 'profile'
                ? 'bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            AVATARS
          </button>
          <button
            onClick={() => { audio.playUIPress(); onOpenChest(); }}
            className="py-2 px-3 text-xs font-semibold rounded-xl tracking-wider transition-all uppercase font-mono text-slate-400 hover:text-slate-200"
          >
            LOOT
          </button>
        </div>

        {/* PROFILE TAB (AVATAR SETUP) */}
        {activeTab === 'profile' && (
          <div className="flex-1 flex flex-col">
            <h3 className="text-sm font-semibold tracking-wider text-slate-300 font-mono mb-3">
              SELECT YOUR ROYALE PRESENCE
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Select an avatar icon to personalize your profile appearance inside competitive leaderboards and active match lobbies.
            </p>

            <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 overflow-y-auto max-h-[300px] p-2 bg-slate-950/40 rounded-2xl border border-white/5">
              {AVATARS.map((emoji) => (
                <button
                  key={emoji}
                  onClick={() => selectAvatar(emoji)}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl border transition-all ${
                    userProfile.avatar === emoji
                      ? 'border-yellow-400 bg-yellow-400/10 scale-105 shadow-md shadow-yellow-400/10'
                      : 'border-white/5 bg-slate-900 hover:border-white/20'
                  }`}
                >
                  {emoji}
                </button>
              ))}
            </div>

            <div className="mt-auto pt-4 border-t border-white/5 flex gap-4">
              <div className="flex-1 bg-slate-950/60 p-3 rounded-xl border border-white/5">
                <span className="block text-[10px] text-slate-400 font-mono uppercase">Current Character</span>
                <span className="text-xs font-bold text-slate-100 flex items-center gap-2 mt-1">
                  <span className="text-xl">{userProfile.avatar}</span>
                  Honorary Contender
                </span>
              </div>
              <button 
                onClick={() => { audio.playUIPress(); setActiveTab('lobby'); }}
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-xs font-mono font-bold tracking-wider uppercase rounded-xl border border-white/10 transition-all"
              >
                Back to Play
              </button>
            </div>
          </div>
        )}

        {/* LOBBY TAB (MATCH CONFIGURATION) */}
        {(activeTab === 'lobby' || activeTab === 'modes') && (
          <div className="flex-1 flex flex-col justify-between">
            <div>
              {/* Game Modes selector buttons */}
              <h3 className="text-sm font-semibold tracking-wider text-slate-300 font-mono mb-3">
                CHOOSE CHAMPIONSHIP THEME
              </h3>
              
              <div className="grid grid-cols-3 gap-3 mb-5">
                <button
                  onClick={() => { audio.playUIPress(); setGameMode('ai'); }}
                  className={`p-4 rounded-2xl border flex flex-col gap-1.5 text-left transition-all ${
                    gameMode === 'ai'
                      ? 'border-amber-500/60 bg-gradient-to-tr from-amber-500/10 to-yellow-500/10 scale-[1.02]'
                      : 'border-white/5 bg-slate-950/40 hover:border-white/10'
                  }`}
                >
                  <Bot className={`w-5 h-5 ${gameMode === 'ai' ? 'text-amber-400' : 'text-slate-400'}`} />
                  <span className="font-bold text-xs">OFFLINE VS AI</span>
                  <span className="text-[10px] text-slate-400">Intelligent engine</span>
                </button>

                <button
                  onClick={() => { audio.playUIPress(); setGameMode('local'); }}
                  className={`p-4 rounded-2xl border flex flex-col gap-1.5 text-left transition-all ${
                    gameMode === 'local'
                      ? 'border-emerald-500/60 bg-gradient-to-tr from-emerald-500/10 to-teal-500/10 scale-[1.02]'
                      : 'border-white/5 bg-slate-950/40 hover:border-white/10'
                  }`}
                >
                  <Users className={`w-5 h-5 ${gameMode === 'local' ? 'text-emerald-400' : 'text-slate-400'}`} />
                  <span className="font-bold text-xs">LOCAL ROOM</span>
                  <span className="text-[10px] text-slate-400">Pass and Play</span>
                </button>

                <button
                  onClick={() => { audio.playUIPress(); setGameMode('online'); }}
                  className={`p-4 rounded-2xl border flex flex-col gap-1.5 text-left transition-all relative ${
                    gameMode === 'online'
                      ? 'border-blue-500/60 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 scale-[1.02]'
                      : 'border-white/5 bg-slate-950/40 hover:border-white/10'
                  }`}
                >
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <Target className={`w-5 h-5 ${gameMode === 'online' ? 'text-blue-400' : 'text-slate-400'}`} />
                  <span className="font-bold text-xs">ONLINE PRO</span>
                  <span className="text-[10px] text-slate-400">Competitive match</span>
                </button>
              </div>

              {/* Dynamic Sub Configuration Panel values */}
              <div className="bg-slate-950/40 p-4 rounded-2xl border border-white/5 min-h-[170px] flex flex-col justify-between">
                
                {/* AI SPECIFIC OPTIONS */}
                {gameMode === 'ai' && (
                  <div>
                    <h4 className="text-[11px] font-bold text-slate-400 tracking-wider font-mono uppercase mb-3.5">
                      MATCH SETTINGS: VS AI
                    </h4>
                    
                    <div className="mb-4">
                      <label className="text-xs text-slate-400 mb-2 block font-mono">PLAYER COUNTER ({playerCount})</label>
                      <div className="flex gap-2">
                        {[2, 3, 4].map(num => (
                          <button
                            key={num}
                            onClick={() => { audio.playUIPress(); setPlayerCount(num); }}
                            className={`flex-1 py-2 text-xs font-bold rounded-xl border transition-all ${
                              playerCount === num
                                ? 'border-amber-500 bg-amber-500/10 text-amber-300'
                                : 'border-white/5 bg-slate-900 text-slate-400 hover:border-white/10'
                            }`}
                          >
                            {num} Players
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-slate-400 mb-2 block font-mono">INTELLIGENCE LEVEL</label>
                      <div className="flex gap-2">
                        {['easy', 'medium', 'hard'].map(lvl => (
                          <button
                            key={lvl}
                            onClick={() => { audio.playUIPress(); setAiDifficulty(lvl as any); }}
                            className={`flex-1 py-1.5 text-xs rounded-xl font-bold border capitalize transition-all ${
                              aiDifficulty === lvl
                                ? 'border-amber-500 bg-amber-500/10 text-amber-300'
                                : 'border-white/5 bg-slate-900 text-slate-400 hover:border-white/10'
                            }`}
                          >
                            {lvl}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* LOCAL PASS AND PLAY OPTIONS */}
                {gameMode === 'local' && (
                  <div>
                    <h4 className="text-[11px] font-bold text-slate-400 tracking-wider font-mono uppercase mb-3.5">
                      MATCH SETTINGS: PASS & PLAY
                    </h4>

                    <div className="mb-4">
                      <label className="text-xs text-slate-400 mb-2 block font-mono">PLAYER COUNTER ({playerCount})</label>
                      <div className="flex gap-2">
                        {[2, 3, 4].map(num => (
                          <button
                            key={num}
                            onClick={() => { audio.playUIPress(); setPlayerCount(num); }}
                            className={`flex-1 py-2 text-xs font-bold rounded-xl border transition-all ${
                              playerCount === num
                                ? 'border-emerald-500 bg-emerald-500/10 text-emerald-300'
                                : 'border-white/5 bg-slate-900 text-slate-400 hover:border-white/10'
                            }`}
                          >
                            {num} Players
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Quick players Custom name inputs */}
                    <div className="grid grid-cols-2 gap-3">
                      {(['red', 'green', 'yellow', 'blue'] as PlayerColor[]).slice(0, playerCount).map((col, idx) => (
                        <div key={col} className="bg-slate-900/60 p-2 rounded-xl border border-white/5 flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: col === 'red' ? '#ef4444' : col === 'green' ? '#22c55e' : col === 'yellow' ? '#eab308' : '#3b82f6' }} />
                          <input
                            type="text"
                            value={localNames[col]}
                            onChange={(e) => {
                              setLocalNames(prev => ({ ...prev, [col]: e.target.value }));
                            }}
                            className="bg-transparent text-xs outline-none text-white font-semibold w-full"
                            placeholder={`Contender ${idx + 1}`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ONLINE MULTIPLAYER MATCH OPTIONS */}
                {gameMode === 'online' && (
                  <div>
                    <h4 className="text-[11px] font-bold text-slate-400 tracking-wider font-mono uppercase mb-2">
                      MATCH SETTINGS: ONLINE CHAMPIONSHIP
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      Deploy instant search for eligible contestants across international rooms. In this sandboxed version, we match you instantly with actual active live simulator players and enable interactive chats.
                    </p>

                    <div className="flex gap-4">
                      <div className="flex-1 bg-slate-900/60 p-3 rounded-xl border border-white/5 flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                        <div>
                          <span className="block text-[9px] text-slate-400 font-mono">SERVERS</span>
                          <span className="text-xs font-bold text-slate-100">Royale Asia-Pacific</span>
                        </div>
                      </div>
                      <div className="flex-1 bg-slate-900/60 p-3 rounded-xl border border-white/5 flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                        <div>
                          <span className="block text-[9px] text-slate-400 font-mono">PING RATE</span>
                          <span className="text-xs font-bold text-emerald-400 font-mono">18 ms</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Launch Championship Room trigger CTA */}
            <div className="pt-4 border-t border-white/10 mt-4">
              <button
                onClick={handleStart}
                className="w-full py-4 rounded-2xl bg-gradient-to-b from-[#d4af37] to-[#b8860b] hover:from-[#e5c158] hover:to-[#cfa32b] shadow-xl shadow-[#d4af37]/10 hover:scale-[1.01] active:scale-[0.99] transition-all font-mono font-bold text-sm tracking-wider uppercase text-slate-950 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Play className="w-5 h-5 fill-slate-950 text-slate-950" />
                ENTER ROYALE ARENA
              </button>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
