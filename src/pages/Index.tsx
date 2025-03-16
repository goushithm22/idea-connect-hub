
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />
      <main>
        <HeroSection />
      </main>
    </div>
  );
};

export default Index;
