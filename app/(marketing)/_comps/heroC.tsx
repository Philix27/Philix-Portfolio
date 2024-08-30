'use client';

import { TextH, TextP } from '@/comps';
import { cn } from '@/lib';
import React, { ReactNode } from 'react';

export function HeroCenter(props: { children: ReactNode; className?: string }) {
  return (
    <section className={cn('container md:w-[80%] w-full', props.className)}>
      <div
        className={`
        min-h-[400px] w-full 
        flex items-center justify-center
        px-2 md:px-[5%]
    `}
      >
        <div
          className={`
        pt-4 h-full 
        w-[95%]
        md:w-[75%]
         text-center
      `}
        >
          {props.children}
        </div>
      </div>
    </section>
  );
}
