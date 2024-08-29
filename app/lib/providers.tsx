'use client';

import React, { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';

export function AppProviders(props: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {props.children}
      <Toaster className={'bg-primary'} />
    </ThemeProvider>
  );
}
