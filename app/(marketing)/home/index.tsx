'use client';

import React from 'react';

import { CardsSection, HeroSection, JumbutronSection, HeroWithImg } from '../_comps';
import { AppImg, AppPages } from '@/lib';
import { AppButton, TextH, TextP } from '@/comps';
import { cardData } from './cards';
import { useRouter } from 'next/navigation';

export function HomeSection() {
  const router = useRouter();
  return (
    <div className={'flex flex-col items-center justify-center w-full'}>
      <HeroWithImg img={'/profile.jpg'} className="my-5 bg-slate-600 md:py-0 py-5 rounded-3xl md:w-[80%]">
        <div className="h-full">
          <TextH v="h2" className={'text-[24px] font-extrabold md:text-[50px] text-card-foreground tracking-wide'}>
            Hello, I am Felix Eligbue a Fullstack Engineer
          </TextH>
          <TextP>Say some</TextP>
        </div>
      </HeroWithImg>

      <JumbutronSection title={'Fun time'} subtitle="Play chess and have fun with friends and top chess master." />

      <CardsSection data={cardData} />
      <HeroWithImg img={'/profile.jpg'} className="my-5 bg-lemon-900 md:py-0 py-5 rounded-3xl md:w-[80%]">
        <div className="h-full">
          <TextH v="h1" className={'text-[24px] font-extrabold md:text-[50px] text-card-foreground'}>
            <span className="text-primary tracking-wide"> Board Masters </span>
            <span className="text-primary tracking-wide"> Chess </span> and
            <span className="text-primary tracking-wide"> Checkers</span>
          </TextH>
          <TextP>Say some</TextP>
        </div>
      </HeroWithImg>
    </div>
  );
}
