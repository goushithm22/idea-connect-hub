
import React from 'react';
import { User, Handshake, TrendingUp, DollarSign, Briefcase, Target, Rocket, Users } from 'lucide-react';

const AnimatedIllustration = () => {
  // Icons in a circular arrangement
  const icons = [
    { icon: User, position: "top", delay: "0s" },
    { icon: TrendingUp, position: "top-right", delay: "0.5s" },
    { icon: Briefcase, position: "right", delay: "1s" },
    { icon: Rocket, position: "bottom-right", delay: "1.5s" },
    { icon: Users, position: "bottom", delay: "2s" },
    { icon: Target, position: "bottom-left", delay: "2.5s" },
    { icon: DollarSign, position: "left", delay: "3s" },
    { icon: Handshake, position: "top-left", delay: "3.5s" },
  ];

  // Define positions for each icon
  const getPosition = (position) => {
    switch (position) {
      case "top": return { top: "0%", left: "50%" };
      case "top-right": return { top: "14.6%", left: "85.4%" };
      case "right": return { top: "50%", left: "100%" };
      case "bottom-right": return { top: "85.4%", left: "85.4%" };
      case "bottom": return { top: "100%", left: "50%" };
      case "bottom-left": return { top: "85.4%", left: "14.6%" };
      case "left": return { top: "50%", left: "0%" };
      case "top-left": return { top: "14.6%", left: "14.6%" };
      default: return { top: "50%", left: "50%" };
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main circle */}
      <div className="relative w-[400px] h-[400px]">
        {/* Circle outline */}
        <div className="absolute inset-0 rounded-full border border-lightgrey-300 opacity-30"></div>
        
        {/* Center "IS" logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] rounded-full bg-white shadow-sm flex items-center justify-center">
          <div className="w-[60px] h-[60px] rounded-full bg-idea/10 flex items-center justify-center">
            <span className="text-2xl font-bold text-idea">IS</span>
          </div>
        </div>
        
        {/* Small decorative dots */}
        {[0, 1, 2, 3].map((index) => (
          <div 
            key={`dot-${index}`}
            className="absolute w-2 h-2 rounded-full bg-idea/20 animate-pulse-slow"
            style={{
              top: `${50 + 45 * Math.sin(index * Math.PI / 2)}%`,
              left: `${50 + 45 * Math.cos(index * Math.PI / 2)}%`,
              animationDelay: `${index * 0.7}s`
            }}
          ></div>
        ))}
        
        {/* Icons in circle */}
        {icons.map((item, index) => {
          const position = getPosition(item.position);
          const Icon = item.icon;
          
          return (
            <div 
              key={index}
              className="absolute -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center animate-fade-in opacity-0"
              style={{ 
                top: position.top, 
                left: position.left,
                animationDelay: item.delay,
                animationFillMode: 'forwards'
              }}
            >
              <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-lightgrey shadow-sm">
                <Icon size={20} className="text-gray-700" strokeWidth={1.5} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedIllustration;
