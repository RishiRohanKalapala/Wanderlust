import { useState, useEffect } from 'react';
import { getSystemTheme, applyTheme } from '../utils/theme';

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return (saved as 'dark' | 'light') || getSystemTheme();
  });

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () => 
    setTheme(current => current === 'light' ? 'dark' : 'light');

  return { theme, toggleTheme };
}