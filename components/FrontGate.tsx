
import React from 'react';

const FrontGate: React.FC<{ onEnter: () => void; isExiting: boolean; isReady: boolean; }> = ({ onEnter, isExiting, isReady }) => {
  return (
  <div className="fixed inset-0 bg-gray-900 text-white flex items-center justify-center overflow-hidden select-none" style={{width: '100vw', height: '100vh'}}>
      {/* Background Animation */}
      <div className={`absolute inset-0 bg-gradient-to-br from-[#0c0a1d] to-[#1f1a3b] transition-opacity duration-1000 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
        <div className="absolute inset-0 z-0">
          {/* Central Orb */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#8B5CF6] rounded-full filter blur-3xl opacity-30 animate-[pulse_4s_ease-in-out_infinite] transition-transform duration-1000 ${isExiting ? 'scale-150' : 'scale-100'}`}></div>
          
          {/* Rotating Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[700px] md:h-[700px] border-2 border-cyan-500/30 rounded-full animate-[spin_30s_linear_infinite]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[900px] md:h-[900px] border border-purple-500/20 rounded-full animate-[spin_45s_linear_infinite_reverse]"></div>

          {/* Drifting Particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-cyan-400/50"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `drift ${Math.random() * 20 + 10}s linear infinite`,
                animationDelay: `${Math.random() * -30}s`
              }}
            ></div>
          ))}
        </div>
        <style>{`
          @keyframes spin_reverse {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }
          .animate-\\[spin_45s_linear_infinite_reverse\\] {
            animation: spin_reverse 45s linear infinite;
          }
          @keyframes drift {
            from { transform: translateY(0px) translateX(0px); opacity: 1; }
            to { transform: translateY(-150px) translateX(${Math.random() > 0.5 ? '' : '-'}50px); opacity: 0; }
          }
        `}</style>
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center transition-all duration-700 ease-in-out ${isExiting ? 'opacity-0 -translate-y-8' : 'opacity-100 translate-y-0'}`}>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-4">Hi, I’m Abishek S</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto mb-12">
          I design UI/UX, build web experiences, and craft AI automations.
        </p>
        <button
          onClick={onEnter}
          disabled={!isReady}
          className={`relative px-12 py-4 text-lg font-bold text-white bg-[#8B5CF6] rounded-full shadow-lg shadow-[#8B5CF6]/30 transition-all duration-500 ease-in-out transform hover:scale-110 hover:bg-purple-600 focus:outline-none focus:ring-4 focus:ring-[#8B5CF6]/50 disabled:opacity-50 disabled:cursor-wait ${isReady ? 'animate-bounce' : ''}`}
          style={{ animationIterationCount: 3, transitionProperty: 'transform, background, box-shadow' }}
        >
          {isReady ? "Let's Dive In" : "Loading..."}
        </button>
      </div>

      {/* Exit bloom effect */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full transition-transform duration-700 ease-in-out ${isExiting ? 'scale-[3000]' : 'scale-0'}`}></div>
    </div>
  );
};

export default FrontGate;
