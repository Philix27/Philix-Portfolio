'use client';

import React from 'react';
import { TextH, TextP } from '@/comps';

export function HeroSection(props: { title: string; subtitle: string; img: string; imgFirst?: boolean }) {
  return (
    <section className="container md:w-[80%] w-full">
      <div
        className={`
        w-full 
        grid grid-cols-1
        md:grid-cols-2
        px-2 md:px-[5%] bg-primary rounded-2xl
    `}
      >
        {props.imgFirst ? (
          <>
            <div className={'flex items-center justify-center'}>
              <img src={props.img} alt="" className={'h-[300px] w-[200px]'} />
            </div>
            <TextBlock {...props} />
          </>
        ) : (
          <>
            <TextBlock {...props} />
            <div className={'flex items-center justify-center'}>
              <img src={props.img} alt="" className={'h-[300px] w-[200px]'} />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
function TextBlock(props: { title: string; subtitle: string; img: string; imgFirst?: boolean }) {
  return (
    <div className="h-full flex flex-col items-start justify-center px-2 md:px-4 py-8 md:py-4">
      <TextH className="text-2xl font-extrabold text-primary-foreground">{props.title}</TextH>
      <div className="mb-10" />
      <TextP className={'text-secondary-foreground'} v={'p4'}>
        {props.subtitle}
      </TextP>
    </div>
  );
}
