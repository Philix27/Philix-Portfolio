'use client';

import React from 'react';

import { TextH, TextP } from '@/comps';
import { cn, useAppTheme } from '@/lib';

export function CardsSection(props: {
  className?: string;
  data: {
    title: string;
    img: string;
    subtitle: string;
  }[];
}) {
  const { gradient } = useAppTheme();
  return (
    <section className={cn('md:flex w-full flex items-center justify-center', props.className)}>
      <div
        className={`md:w-[80%] w-[80%]
      grid md:grid-cols-3 grid-cols-1 
       my-5 gap-2 mx-0
    `}
      >
        {props.data.map((item, i) => (
          <div className={cn('border-r-ring md:mx-2 rounded-3xl mb-5', gradient)} key={i}>
            <div className={'w-full flex items-center justify-center mb-2'}>
              <img src={item.img} className={'md:w-[300px] h-[300px] w-full rounded-md'} />
            </div>

            <div className="px-4 py-4">
              <TextH v="h3" className="mb-4 text-primary-foreground tracking-wide">
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
