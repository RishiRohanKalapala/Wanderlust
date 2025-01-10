import React from 'react';

interface AnimatedCardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function AnimatedCard({ children, delay = 0, className = '' }: AnimatedCardProps) {
  return (
    <div
      className={`
        opacity-0 animate-slide-up
        bg-white dark:bg-gray-800 rounded-lg shadow-lg
        hover:shadow-xl transition-all duration-300
        ${className}
      `}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}