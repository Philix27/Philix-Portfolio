'use client';

import { cn } from '@/lib';
import React, { ReactNode } from 'react';

export function HeroWithImg(props: { children: ReactNode; img: string; className?: string }) {
  return (
    <section className={cn(props.className)}>
      <div
        className={`container rounded-3xl
        md:min-h-[50vh] w-full 
        flex items-center justify-between
        flex-col md:flex-row
    `}
      >
        <div
          className={`
        pt-4 h-full flex items-center justify-center
        w-[85%]
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
