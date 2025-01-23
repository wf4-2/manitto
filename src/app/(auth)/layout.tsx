import GradientBackground from '@/components/GradientBackground';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

// <div className="min-h-screen bg-gradient-to-b from-[#fde2e4] to-[#fff1f2] flex items-center justify-center relative">
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <GradientBackground>
      <div className="flex w-screen h-screen items-center justify-center">
        {children}
      </div>
    </GradientBackground>
  );
};

export default Layout;
