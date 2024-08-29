'use client';

import * as React from 'react';
import { AppButton } from '@/comps';
import { useTheme } from 'next-themes';
import { FaMoon } from 'react-icons/fa';
import { BiSun } from 'react-icons/bi';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <AppButton variant="ghost" size="icon" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? (
        <FaMoon className="h-[1.5rem] w-[1.3rem text-primary-foreground" />
      ) : (
        <BiSun className="h-[1.5rem] w-[1.3rem text-primary-foreground" />
      )}
    </AppButton>
  );
}
