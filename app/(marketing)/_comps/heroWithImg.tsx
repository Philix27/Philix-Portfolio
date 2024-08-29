'use client';

import { cn } from '@/lib';
import React, { ReactNode } from 'react';

export function HeroWithImg(props: { children: ReactNode; bg: string; img: string; className?: string }) {
  return (
    <section className={cn('md:py-0 py-5 rounded-lg md:rounded-3xl w-full', props.className)}>
      <div
        className={cn(
          props.bg,
          `container rounded-lg md:rounded-3xl
        md:min-h-[50vh] w-[80%] 
        flex items-center justify-between
        flex-col md:flex-row
    `
        )}
      >
        <div
          className={`
        pt-4 h-full flex items-center justify-center
        w-full
        md:w-[50%] gap-x-4
      `}
        >
          {props.children}
        </div>
        <div className="my-5">
          <img src={props.img} className="md:h-[500px] h-[200px] w-auto rounded-3xl" />
        </div>
      </div>
    </section>
  );
}
