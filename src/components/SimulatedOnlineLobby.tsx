import React, { useState, useEffect, useRef } from 'react';
import { PlayerColor, ChatMessage, UserProfile } from '../types';
import { Loader2, Send, ShieldAlert, Wifi, MessageSquare, Heart, RefreshCw } from 'lucide-react';
import { audio } from '../utils/audio';

interface SimulatedOnlineLobbyProps {
  userProfile: UserProfile;
  playersConfig: { name: string; isAI: boolean; color: PlayerColor }[];
  onMatchReady: () => void;
  onCancelMatch: () => void;
}

const QUOTES_POOL = [
  "Yo, let's roll!",
  "Ludo King here, prepare to get knocked back to base!",
  "GLHF everyone!",
  "No mercy today 🦾",
  "Is anyone playing hard mode strategy?",
  "Love the real-time wooden board reflections!",
  "Let's see who gets a 6 first!"
];

const ROBOT_NAMES = ["NeoLudo", "PawnStar", "DiceViper", "BoardLord", "RoyalDice", "GoldDigger"];
const ROBOT_AVATARS = ["🦁", "🐼", "🦄", "🐼", "🐲", "🥷", "🧑‍🚀", "👸"];

export default function SimulatedOnlineLobby({
  userProfile,
  playersConfig,
  onMatchReady,
  onCancelMatch
}: SimulatedOnlineLobbyProps) {
  const [status, setStatus] = useState<'searching' | 'connected'>('searching');
  const [foundPlayers, setFoundPlayers] = useState<{ name: string; avatar: string; rating: number; color: PlayerColor }[]>([]);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const chatScrollRef = useRef<HTMLDivElement>(null);

  // Search phase timer
  useEffect(() => {
    if (status !== 'searching') return;

    // Start with the user
    setFoundPlayers([
      { name: userProfile.username, avatar: userProfile.avatar, rating: 1240, color: 'red' }
    ]);

    // Match Opponent 2 after 1.2s
    const t1 = setTimeout(() => {
      audio.playMoveTick(1);
      setFoundPlayers(prev => [
        ...prev,
        {
          name: ROBOT_NAMES[Math.floor(Math.random() * ROBOT_NAMES.length)],
          avatar: ROBOT_AVATARS[Math.floor(Math.random() * ROBOT_AVATARS.length)],
          rating: 1100 + Math.floor(Math.random() * 300),
          color: 'green'
        }
      ]);
    }, 1200);

    // Match Opponent 3 after 2.4s
    const t2 = setTimeout(() => {
      audio.playMoveTick(2);
      setFoundPlayers(prev => [
        ...prev,
        {
          name: ROBOT_NAMES[Math.floor(Math.random() * ROBOT_NAMES.length)],
          avatar: ROBOT_AVATARS[Math.floor(Math.random() * ROBOT_AVATARS.length)],
          rating: 1100 + Math.floor(Math.random() * 300),
          color: 'yellow'
        }
      ]);
    }, 2400);

    // Match Opponent 4 after 3.6s
    const t3 = setTimeout(() => {
      audio.playReachHome(); // Match complete arpeggio chime!
      setFoundPlayers(prev => [
        ...prev,
        {
          name: ROBOT_NAMES[Math.floor(Math.random() * ROBOT_NAMES.length)],
          avatar: ROBOT_AVATARS[Math.floor(Math.random() * ROBOT_AVATARS.length)],
          rating: 1100 + Math.floor(Math.random() * 300),
          color: 'blue'
        }
      ]);
      setStatus('connected');
    }, 3600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [status, userProfile]);

  // Automated Chat Simulation on connection complete
  useEffect(() => {
    if (status !== 'connected') return;

    // Add initial greetings
    const greetings: ChatMessage[] = [
      { id: '1', sender: 'System Engine', color: 'system', message: '🔒 Encryption keys generated. Arena secure.', timestamp: 'Now' },
    ];
    setChatMessages(greetings);

    // Dynamic responses from bots
    const replyTimers = [
      setTimeout(() => {
        sendBotMessage('green', QUOTES_POOL[0]);
      }, 1000),
      setTimeout(() => {
        sendBotMessage('yellow', QUOTES_POOL[1]);
      }, 2500),
      setTimeout(() => {
        sendBotMessage('blue', QUOTES_POOL[2]);
      }, 4000)
    ];

    return () => replyTimers.forEach(t => clearTimeout(t));
  }, [status]);

  const sendBotMessage = (color: PlayerColor, text: string) => {
    const opp = foundPlayers.find(p => p.color === color);
    if (!opp) return;

    const msg: ChatMessage = {
      id: Math.random().toString(),
      sender: opp.name,
      color: opp.color,
      message: text,
      timestamp: 'Now'
    };
    setChatMessages(prev => [...prev, msg]);
    audio.playMoveTick(3);
    scrollToBottom();
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    audio.playUIPress();
    const newMsg: ChatMessage = {
      id: Math.random().toString(),
      sender: userProfile.username,
      color: 'red',
      message: inputText.trim(),
      timestamp: 'Now'
    };

    setChatMessages(prev => [...prev, newMsg]);
    setInputText('');
    scrollToBottom();

    // Spawn a smart reply from opponent bot mirroring human sentiment
    setTimeout(() => {
      const activeBots = foundPlayers.filter(p => p.color !== 'red');
      if (activeBots.length > 0) {
        const randomBot = activeBots[Math.floor(Math.random() * activeBots.length)];
        const replies = [
          "Nice! Let's settle this on the luxury wooden board.",
          "Good one, bring your best dice rolling index!",
          "Ahaha focus! The match is initializing.",
          "I am going hard strategy on you red player, watch out!"
        ];
        sendBotMessage(randomBot.color, replies[Math.floor(Math.random() * replies.length)]);
      }
    }, 1500);
  };

  const scrollToBottom = () => {
    setTimeout(() => {
      if (chatScrollRef.current) {
        chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
      }
    }, 50);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-6 text-white font-sans flex flex-col gap-6">
      
      {/* HEADER CONNECTION STATUS TRACK BAR */}
      <div className="glass-panel border border-white/10 p-4 rounded-2xl flex items-center justify-between bg-slate-900/80">
        <div className="flex items-center gap-3">
          <Wifi className="text-emerald-400 w-5 h-5 animate-pulse" />
          <div>
            <h2 className="text-sm font-bold font-mono text-slate-200">MATCH MAKING QUEUE</h2>
            <p className="text-[10px] text-slate-400 tracking-wider">CONNECTING TO ROYALE ARENA 3D</p>
          </div>
        </div>

        <span className="text-xs font-mono font-bold bg-slate-800 text-slate-300 px-3 py-1 rounded-full border border-white/5 uppercase">
          {status === 'searching' ? 'SEARCHING...' : 'ESTABLISHED'}
        </span>
      </div>

      {/* MID SECTION: FOUND PLAYER SLOTS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Slot Red - User */}
        <div className="p-4 rounded-2xl border border-red-500/30 bg-slate-900/80 text-center relative overflow-hidden flex flex-col justify-center items-center min-h-[160px]">
          <span className="absolute top-2 left-2 text-[10px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full font-mono font-bold uppercase">HOST</span>
          <span className="text-4xl filter drop-shadow mb-3">{userProfile.avatar}</span>
          <h3 className="font-bold text-sm text-slate-100 line-clamp-1">{userProfile.username}</h3>
          <span className="text-[10px] text-red-400 font-mono mt-1">RED TEAM</span>
        </div>

        {/* Slot Green */}
        <div className="p-4 rounded-2xl border border-white/10 bg-slate-900/40 text-center relative overflow-hidden flex flex-col justify-center items-center min-h-[160px]">
          {foundPlayers.length >= 2 ? (
            <>
              <span className="text-4xl filter drop-shadow mb-3">{foundPlayers[1].avatar}</span>
              <h3 className="font-bold text-sm text-slate-100 line-clamp-1">{foundPlayers[1].name}</h3>
              <span className="text-[10px] text-emerald-400 font-mono mt-1">GREEN TEAM</span>
            </>
          ) : (
            <div className="flex flex-col items-center">
              <Loader2 className="w-8 h-8 text-emerald-400 animate-spin mb-2" />
              <span className="text-[10px] text-slate-400 font-mono">SEARCHING...</span>
            </div>
          )}
        </div>

        {/* Slot Yellow */}
        <div className="p-4 rounded-2xl border border-white/10 bg-slate-900/40 text-center relative overflow-hidden flex flex-col justify-center items-center min-h-[160px]">
          {foundPlayers.length >= 3 ? (
            <>
              <span className="text-4xl filter drop-shadow mb-3">{foundPlayers[2].avatar}</span>
              <h3 className="font-bold text-sm text-slate-100 line-clamp-1">{foundPlayers[2].name}</h3>
              <span className="text-[10px] text-amber-400 font-mono mt-1">YELLOW TEAM</span>
            </>
          ) : (
            <div className="flex flex-col items-center">
              <Loader2 className="w-8 h-8 text-amber-400 animate-spin mb-2" />
              <span className="text-[10px] text-slate-400 font-mono">SEARCHING...</span>
            </div>
          )}
        </div>

        {/* Slot Blue */}
        <div className="p-4 rounded-2xl border border-white/10 bg-slate-900/40 text-center relative overflow-hidden flex flex-col justify-center items-center min-h-[160px]">
          {foundPlayers.length >= 4 ? (
            <>
              <span className="text-4xl filter drop-shadow mb-3">{foundPlayers[3].avatar}</span>
              <h3 className="font-bold text-sm text-slate-100 line-clamp-1">{foundPlayers[3].name}</h3>
              <span className="text-[10px] text-blue-400 font-mono mt-1">BLUE TEAM</span>
            </>
          ) : (
            <div className="flex flex-col items-center">
              <Loader2 className="w-8 h-8 text-blue-400 animate-spin mb-2" />
              <span className="text-[10px] text-slate-400 font-mono">SEARCHING...</span>
            </div>
          )}
        </div>
      </div>

      {/* CHAT LOBBY AND CONTROLS SPLIT CARD */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Left Side: Real-time Chat Dialog */}
        <div className="md:col-span-2 glass-panel border border-white/10 rounded-2xl p-4 bg-slate-900/80 flex flex-col h-[280px]">
          <div className="flex items-center gap-2 border-b border-white/5 pb-2 mb-3">
            <MessageSquare className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-mono font-bold text-slate-400 uppercase">Interactive Competitions Chat</span>
          </div>

          {/* Messages Body */}
          <div 
            ref={chatScrollRef} 
            className="flex-1 overflow-y-auto space-y-2.5 pr-2"
          >
            {chatMessages.length === 0 ? (
              <p className="text-xs text-slate-500 font-mono italic text-center mt-8">Secure connection starting. Say hello!</p>
            ) : (
              chatMessages.map(msg => (
                <div key={msg.id} className="text-xs">
                  {msg.color === 'system' ? (
                    <div className="text-slate-500 font-mono italic bg-slate-950/40 px-2 py-1.5 rounded border border-white/5">{msg.message}</div>
                  ) : (
                    <div>
                      <span 
                        className="font-bold mr-1.5" 
                        style={{ color: msg.color === 'red' ? '#ef4444' : msg.color === 'green' ? '#22c55e' : msg.color === 'yellow' ? '#eab308' : '#3b82f6' }}
                      >
                        {msg.sender}:
                      </span>
                      <span className="text-slate-200">{msg.message}</span>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Compose Panel */}
          <form onSubmit={handleSendMessage} className="flex gap-2 border-t border-white/5 pt-3 mt-3">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 bg-slate-950/60 rounded-xl px-3 text-xs border border-white/5 outline-none text-white focus:border-amber-500"
              placeholder="Type message to other contestants..."
              disabled={status === 'searching'}
            />
            <button 
              type="submit"
              className="p-2.5 bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-slate-950 font-bold rounded-xl transition-all flex items-center justify-center disabled:opacity-50"
              disabled={status === 'searching'}
            >
              <Send className="w-4 h-4 text-slate-950 fill-slate-950" />
            </button>
          </form>
        </div>

        {/* Right Side: Deployment Controls */}
        <div className="glass-panel border border-white/10 rounded-2xl p-5 bg-slate-900/80 flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-bold font-mono text-slate-400 tracking-wider uppercase mb-1">PRO ROOM SETUP</h3>
            <span className="text-[10px] text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded font-mono">CODE: #ROYALE-7729</span>
            
            <p className="text-xs text-slate-300 leading-relaxed mt-4">
              All 4 competitive contestants must successfully handshake with the 3D physics server to initialize the luxury mahogany arena board.
            </p>
          </div>

          <div className="space-y-2.5 mt-6">
            {status === 'connected' ? (
              <button
                onClick={() => { audio.playVictory(); onMatchReady(); }}
                className="w-full py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-slate-950 font-mono font-bold text-xs tracking-widest uppercase rounded-xl shadow-lg shadow-emerald-500/10 cursor-pointer active:scale-95 transition-all"
              >
                Launch 3D Arena
              </button>
            ) : (
              <div className="w-full py-3 px-2 bg-slate-950/60 border border-white/5 rounded-xl flex items-center justify-center gap-2.5">
                <Loader2 className="w-4 h-4 text-amber-400 animate-spin" />
                <span className="text-slate-400 text-xs font-mono">SEARCHING CONTENDERS...</span>
              </div>
            )}

            <button
              onClick={() => { audio.playUIPress(); onCancelMatch(); }}
              className="w-full py-2.5 bg-slate-800/80 hover:bg-slate-700/80 border border-white/5 text-slate-300 font-mono font-bold text-[10px] tracking-wider uppercase rounded-xl active:scale-95 transition-all"
            >
              Cancel Matchmaking
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
