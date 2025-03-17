
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-8 py-4 transition-all duration-300",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-normal tracking-tight hover:opacity-80 transition-opacity">
            idea<span className="font-semibold">sync</span>
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link 
            to="/signin" 
            className="px-3 py-2 text-sm rounded-md transition-colors hover:text-idea"
          >
            Sign in
          </Link>
          <Link 
            to="/register" 
            className="px-5 py-2 text-sm text-white bg-idea hover:bg-idea-dark rounded-md transition-colors duration-300"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
