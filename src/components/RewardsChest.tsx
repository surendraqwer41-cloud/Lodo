import React, { useState } from 'react';
import { Achievement, UserProfile } from '../types';
import { Gift, Award, Coins, Sparkles, CheckCircle2, ArrowLeft, RefreshCw } from 'lucide-react';
import { audio } from '../utils/audio';

interface RewardsChestProps {
  userProfile: UserProfile;
  achievements: Achievement[];
  onClaimCoins: (amount: number) => void;
  onClaimAchievement: (id: string, reward: number) => void;
  onClose: () => void;
}

export default function RewardsChest({
  userProfile,
  achievements,
  onClaimCoins,
  onClaimAchievement,
  onClose
}: RewardsChestProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [chestState, setChestState] = useState<'closed' | 'opened'>('closed');
  const [openedReward, setOpenedReward] = useState<number | null>(null);

  const handleOpenChest = () => {
    if (userProfile.coins < 200 && chestState === 'closed') {
      audio.playUIPress();
      alert("Opening the Deluxe chest requires at least 200 coins!");
      return;
    }

    audio.playDiceRoll();
    setIsOpening(true);

    setTimeout(() => {
      audio.playTrophy(); // Beautiful fanfare chime
      const reward = 500 + Math.floor(Math.random() * 1500); // 500 to 2000 random coins
      setOpenedReward(reward);
      setIsOpening(false);
      setChestState('opened');
      onClaimCoins(reward - 200); // Spend 200, earn reward
    }, 1800);
  };

  const handleResetChest = () => {
    audio.playUIPress();
    setChestState('closed');
    setOpenedReward(null);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-6 text-white font-sans flex flex-col gap-6">
      
      {/* HEADER ROW DETAILED WITH AVATAR STATS */}
      <div className="glass-panel border border-white/10 p-5 rounded-3xl flex flex-row items-center justify-between bg-slate-900/80">
        <div className="flex items-center gap-3">
          <button 
            onClick={onClose}
            className="p-2.5 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all border border-white/5"
          >
            <ArrowLeft className="w-4 h-4 text-slate-300" />
          </button>
          <div>
            <h2 className="text-base font-extrabold tracking-wider font-mono text-slate-100">VAULT & DAILY LOOT CHESTS</h2>
            <p className="text-[10px] text-slate-400 font-mono tracking-wider">CLAIM ROYAL COINS & COSMETICS</p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-slate-950/60 px-4 py-2 rounded-xl border border-white/5">
          <Coins className="w-4 h-4 text-amber-400 animate-bounce" />
          <span className="text-sm font-bold font-mono text-yellow-300">{userProfile.coins.toLocaleString()}</span>
        </div>
      </div>

      {/* BODY WITH CHEST SPAWN ON LEFT AND ACHIEVEMENTS ON RIGHT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* LEFT COLUMN: DISCOVER DELUXE MYSTERY LOOT BOX */}
        <div className="glass-panel border border-white/10 p-6 rounded-3xl bg-slate-900/80 flex flex-col justify-between items-center text-center min-h-[400px]">
          <div>
            <h3 className="text-sm font-bold font-mono text-amber-400 tracking-wider uppercase">DELUXE MYSTERY CHEST</h3>
            <p className="text-xs text-slate-400 mt-2 max-w-xs mx-auto">
              Unlock a random treasure chest of Royale Coins. Costs <strong className="text-yellow-400">200 coins</strong> to spin. Guaranteed multipliers up to 10x!
            </p>
          </div>

          {/* MYSTERY BOX CONTAINER FOR CSS ANIMATIONS */}
          <div className="my-8 relative w-48 h-48 flex items-center justify-center">
            
            {/* Spinning ambient corona rays behind chest */}
            <div className={`absolute w-40 h-40 rounded-full bg-amber-500/10 blur-3xl ${isOpening ? 'animate-ping' : ''}`} />

            {chestState === 'closed' ? (
              <div className={`text-8xl select-none filter drop-shadow hover:scale-105 transition-transform duration-300 ${isOpening ? 'animate-bounce' : ''}`}>
                🎁
              </div>
            ) : (
              <div className="text-center animate-scale-in">
                <div className="text-8xl select-none filter drop-shadow">
                  🎉
                </div>
                <div className="mt-4 flex items-center justify-center gap-2 bg-amber-500/20 border border-amber-500/40 py-1.5 px-4 rounded-full text-amber-300 text-sm font-mono font-bold animate-pulse">
                  <Coins className="w-4 h-4" />
                  +{openedReward} Coins!
                </div>
              </div>
            )}
          </div>

          <div className="w-full">
            {chestState === 'closed' ? (
              <button
                onClick={handleOpenChest}
                disabled={isOpening}
                className="w-full py-4 bg-gradient-to-b from-[#d4af37] to-[#b8860b] hover:from-[#e5c158] hover:to-[#cfa32b] text-slate-950 font-mono font-bold text-xs tracking-widest uppercase rounded-2xl shadow-lg shadow-[#d4af37]/10 disabled:opacity-50 cursor-pointer active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                {isOpening ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    UNLOCKING VAULT...
                  </>
                ) : (
                  <>
                    <Gift className="w-4 h-4 text-slate-950 fill-slate-950" />
                    OPEN CHEST (200 Coins)
                  </>
                )}
              </button>
            ) : (
              <button
                onClick={handleResetChest}
                className="w-full py-4 bg-slate-800 hover:bg-slate-700 border border-white/5 text-slate-200 font-mono font-bold text-xs tracking-widest uppercase rounded-2xl active:scale-95 transition-all"
              >
                OPEN ANOTHER CHEST
              </button>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: CHAMPIONSHIP TROPHIES / ACHIEVEMENTS */}
        <div className="glass-panel border border-white/10 p-6 rounded-3xl bg-slate-900/80 flex flex-col h-[480px]">
          <div className="flex items-center gap-2 border-b border-white/5 pb-3 mb-4">
            <Award className="w-5 h-5 text-blue-400" />
            <h3 className="text-sm font-bold font-mono text-slate-200 uppercase">CHAMPIONSHIP ACHIEVEMENTS</h3>
          </div>

          {/* Scrollable list elements */}
          <div className="flex-1 overflow-y-auto space-y-3.5 pr-1">
            {achievements.map((item) => {
              const isClaimable = item.progress >= item.target && !item.unlocked;
              
              return (
                <div 
                  key={item.id}
                  className={`p-3.5 rounded-2xl border transition-all ${
                    item.unlocked 
                      ? 'bg-slate-950/20 border-white/5 opacity-70'
                      : isClaimable 
                        ? 'bg-blue-500/5 border-blue-500/30'
                        : 'bg-slate-950/40 border-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-3xl filter drop-shadow">{item.icon}</span>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h4 className="text-xs font-bold text-slate-200">{item.title}</h4>
                        <span className="text-[10px] font-mono text-amber-400 flex items-center gap-1">
                          <Coins className="w-3 h-3" />
                          +{item.rewardCoins}
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-400 mt-1">{item.description}</p>
                      
                      {/* Achievements progress slider */}
                      <div className="mt-2.5 flex items-center gap-3">
                        <div className="flex-1 bg-slate-800 rounded-full h-1.5 overflow-hidden">
                          <div 
                            className="bg-blue-500 h-full rounded-full transition-all"
                            style={{ width: `${Math.min((item.progress / item.target) * 100, 100)}%` }}
                          />
                        </div>
                        <span className="text-[9px] font-mono font-semibold text-slate-400">
                          {item.progress}/{item.target}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Claim rewards action button triggers */}
                  {isClaimable && (
                    <button
                      onClick={() => onClaimAchievement(item.id, item.rewardCoins)}
                      className="w-full mt-3 py-1.5 bg-blue-500 hover:bg-blue-600 active:scale-95 text-slate-950 font-mono font-bold text-[9px] tracking-widest uppercase rounded-lg transition-all"
                    >
                      CLAIM REWARD
                    </button>
                  )}

                  {item.unlocked && (
                    <div className="flex justify-end gap-1 items-center mt-2 text-[9px] text-emerald-400 font-mono uppercase font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      UNLOCKED & CLAIMED
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>

    </div>
  );
}
