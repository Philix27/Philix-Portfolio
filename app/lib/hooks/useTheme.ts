'use client'
import { useTheme } from 'next-themes';

export const LIGHT_GRADIENT = 'bg-gradient-to-b from-zinc-200 via-slate-300 to-zinc-300';
export const DARK_GRADIENT = 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900';

export const useAppTheme = () => {
  const { setTheme, theme } = useTheme();

  const gradient = theme === 'light' ? LIGHT_GRADIENT : DARK_GRADIENT;
  return { gradient, setTheme };
};
