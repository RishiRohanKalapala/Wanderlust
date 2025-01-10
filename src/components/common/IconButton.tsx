import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IconButtonProps {
  Icon: LucideIcon;
  label: string;
  onClick?: () => void;
  className?: string;
}

export function IconButton({ Icon, label, onClick, className = '' }: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        group flex items-center gap-2 px-4 py-2 
        rounded-full bg-white/10 backdrop-blur-sm
        hover:bg-white/20 transition-all duration-300
        ${className}
      `}
    >
      <Icon className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" />
      <span>{label}</span>
    </button>
  );
}