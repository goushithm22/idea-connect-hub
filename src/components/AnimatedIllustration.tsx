
import React from 'react';
import { Network, Lightbulb, TrendingUp } from 'lucide-react';

const AnimatedIllustration = () => {
  return (
    <div className="relative w-full h-full max-w-[500px] max-h-[500px]">
      {/* Connection network circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full border border-lightgrey-300 animate-pulse-slow"></div>
      
      {/* Orbiting elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] animate-rotate-circle">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md">
          <Lightbulb size={24} className="text-idea" />
        </div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] animate-rotate-circle" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md">
          <TrendingUp size={20} className="text-gray-800" />
        </div>
      </div>
      
      {/* Connecting nodes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px]">
        {Array.from({ length: 6 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-3 h-3 rounded-full bg-white border border-lightgrey-300 shadow-sm"
            style={{
              top: `${50 + 40 * Math.sin(i * Math.PI / 3)}%`,
              left: `${50 + 40 * Math.cos(i * Math.PI / 3)}%`,
              opacity: 0.8,
              animation: `pulse 3s ease-in-out ${i * 0.5}s infinite`
            }}
          ></div>
        ))}
      </div>
      
      {/* Center elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] flex items-center justify-center">
        <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-r from-idea to-idea-light opacity-20 animate-pulse"></div>
        <div className="absolute flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md">
          <Network size={32} className="text-idea" />
        </div>
      </div>
      
      {/* Connection lines */}
      <div className="absolute top-1/4 left-3/4 w-[100px] h-[1px] bg-lightgrey-300 animate-float" style={{ animationDelay: '0.2s' }}></div>
      <div className="absolute top-2/3 left-1/4 w-[80px] h-[1px] bg-lightgrey-300 animate-float" style={{ animationDelay: '0.7s' }}></div>
      <div className="absolute top-1/2 left-[10%] w-[60px] h-[1px] bg-lightgrey-300 animate-float" style={{ animationDelay: '1.2s' }}></div>
    </div>
  );
};

export default AnimatedIllustration;
