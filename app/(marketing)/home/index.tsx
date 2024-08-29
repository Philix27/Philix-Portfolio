'use client';

import React from 'react';

import { CardsSection, HeroSection, JumbutronSection, HeroWithImg } from '../_comps';
import { AppImg, AppPages } from '@/lib';
import { AppButton, TextH, TextP } from '@/comps';
import { cardData } from './cards';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { FaGithub, FaGitlab, FaLinkedin } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { DARK_GRADIENT, LIGHT_GRADIENT, useAppTheme } from '../../lib/hooks/useTheme';
import { CardsLessSection } from '../_comps/cardless';

export function HomeSection() {
  const router = useRouter();
  const { gradient } = useAppTheme();
  return (
    <div className={'flex flex-col items-center justify-center w-full'}>
      <HeroWithImg img={'/profile.jpg'} className="my-4" bg={gradient}>
        <div className="h-full">
          <TextH v="h3" className={'text-[20px] font-extrabold md:text-[35px] text-card-foreground tracking-normal'}>
            Hello, I am Felix Eligbue a Fullstack Engineer
          </TextH>
          <TextP>
            Qualifications An Engineer who is passionate about building products/applications within Defi Individual who
            is excited by the opportunity to join a founding core team and drive a product from zero to one.
          </TextP>
          <div className="flex items-center gap-x-4 w-full text-2xl my-4">
            <AppButton className="w-fit py-1">Hire me</AppButton>
            <FaGithub className="hover:text-primary" />
            <FaGitlab className="hover:text-primary" />
            <FaLinkedin className="hover:text-primary" />
            <MdEmail className="hover:text-primary" />
          </div>
        </div>
      </HeroWithImg>

      <JumbutronSection title={'Fun time'} subtitle="Play chess and have fun with friends and top chess master." />

      <CardsLessSection data={cardData} />
      <HeroWithImg img={'/profile.jpg'} className="my-5" bg={gradient}>
        <div className="h-full">
          <TextH v="h1" className={'text-[24px] font-extrabold md:text-[50px] text-card-foreground'}>
            <span className="text-primary tracking-wide"> Board Masters </span>
            <span className="text-primary tracking-wide"> Chess </span> and
            <span className="text-primary tracking-wide"> Checkers</span>
          </TextH>
          <TextP>Say some</TextP>
        </div>
      </HeroWithImg>
      <CardsSection data={cardData} />
    </div>
  );
}
