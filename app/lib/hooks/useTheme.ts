'use client'
import { useTheme } from 'next-themes';

export const LIGHT_GRADIENT = 'bg-gradient-to-b from-zinc-300 via-slate-300 to-zinc-300';
export const DARK_GRADIENT = 'bg-gradient-to-b from-gray-700 via-gray-600 to-gray-700';

export const useAppTheme = () => {
  const { setTheme, theme } = useTheme();

  const gradient = theme === 'light' ? LIGHT_GRADIENT : DARK_GRADIENT;
  return { gradient };
};
