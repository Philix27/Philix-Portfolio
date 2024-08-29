'use client';

import React from 'react';

import { TextH, TextP } from '@/comps';
import { cn } from '@/lib';

export function CardsSection(props: {
  className?: string;
  data: {
    title: string;
    color: string;
    img: string;
    subtitle: string;
  }[];
}) {
  return (
    <section className={cn('hidden md:flex w-full items-center justify-center', props.className)}>
      <div
        className={`md:w-[80%]
      grid md:grid-cols-3 grid-cols-1 
      w-full my-5 gap-2 mx-0
    `}
      >
        {props.data.map((item, i) => (
          <div className={cn('border-r-ring md:mx-2 rounded-3xl p-4 mb-5', item.color)} key={i}>
            <div className="p-2">
              <div className={'w-full flex items-center justify-center mb-2'}>
                <img src={item.img} className={'md:w-[300px] h-[150px] w-full'} />
              </div>

              <TextH v="h3" className="mb-4 text-primary-foreground">
                {item.title}
              </TextH>
              <TextP v="p5" className={'text-primary-foreground'}>
                {item.subtitle}
              </TextP>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
