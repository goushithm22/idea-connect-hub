
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedIllustration from './AnimatedIllustration';

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row min-h-screen pt-32 md:pt-0">
      {/* Left side with text */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 py-10">
        <div className="max-w-xl">
          <span className="inline-block px-3 py-1 mb-6 text-xs bg-lightgrey rounded-full animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            CONNECTING IDEAS WITH CAPITAL
          </span>
          
          <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-tight animate-fade-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            idea<span className="font-semibold">sync</span>
          </h1>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-800 animate-fade-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              Where visionary founders and strategic investors connect.
            </p>
            <p className="text-lg text-gray-600 animate-fade-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              The platform that transforms great ideas into funded realities.
            </p>
          </div>
          
          <div className="mt-10 flex space-x-4 animate-fade-up opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <Link 
              to="/register" 
              state={{ role: 'Founder' }}
              className="px-6 py-3 rounded-md bg-idea text-white font-medium transition-all duration-300 hover:bg-idea-dark hover:shadow-md"
            >
              For Founders
            </Link>
            <Link 
              to="/register" 
              state={{ role: 'Investor' }}
              className="px-6 py-3 rounded-md border border-lightgrey-300 hover:border-idea hover:text-idea transition-all duration-300"
            >
              For Investors
            </Link>
          </div>
        </div>
      </div>
      
      {/* Right side with illustration */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-10 animate-fade-in opacity-0" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
        <AnimatedIllustration />
      </div>
    </div>
  );
};

export default HeroSection;
