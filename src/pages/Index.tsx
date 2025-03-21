
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import AnimatedIllustration from '@/components/AnimatedIllustration';
import { Briefcase, TrendingUp } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-lightgrey overflow-hidden">
      <Header />
      
      <main className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row min-h-screen items-center">
          {/* Left side content */}
          <div className="w-full lg:w-1/2 pt-32 lg:pt-0 lg:pr-12">
            <div className="space-y-6 max-w-xl">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-lightgrey">
                <span className="text-gray-800 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                  CONNECTING IDEAS WITH CAPITAL
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-tight animate-fade-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                idea<span className="font-semibold">sync</span>
              </h1>
              
              <p className="text-xl text-gray-800 animate-fade-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                Where visionary founders and strategic investors connect to transform great ideas into funded realities.
              </p>
              
              <div className="space-y-4 pt-4 animate-fade-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                <p className="text-sm text-gray-600">Join as:</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/register" state={{ role: 'Founder' }} className="px-6 py-3 rounded-md bg-idea text-white font-medium flex items-center justify-center transition-all duration-300 hover:bg-idea-dark hover:shadow-md">
                    <Briefcase className="mr-2 h-4 w-4" />
                    I'm a Founder
                  </Link>
                  <Link to="/register" state={{ role: 'Investor' }} className="px-6 py-3 rounded-md bg-white border border-gray-200 text-gray-800 font-medium flex items-center justify-center transition-all duration-300 hover:border-idea hover:text-idea">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    I'm an Investor
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side illustration - keeping current animation */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-10 animate-fade-in opacity-0" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
            <AnimatedIllustration />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
