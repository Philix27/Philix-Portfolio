'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { IconType } from 'react-icons';
import { BiSolidChess } from 'react-icons/bi';
import { MdOutlineSettings } from 'react-icons/md';
import { FaRegChessKing } from 'react-icons/fa6';
import { cn } from '@/lib';

export function BottomNav() {
  const router = useRouter();
  const path = usePathname();

  function isActive(link: string): boolean {
    if (link === path) {
      return true;
    }
    return false;
  }

  return (
    <div
      className={`
        fixed bottom-0 h-[50px]
        border-t-[0.5px] bg-secondary
        w-full flex items-center justify-center 
      `}
    >
      <div
        className={`
      flex justify-around items-center
      py-2 w-[70%]
      `}
      >
        {navItems.map(({ Icon, title, link }, i) => {
          return (
            <div
              onClick={() => router.push(link)}
              key={i}
              className={cn(
                `size-[40px] 
              flex flex-col items-center justify-center
              rounded-[10px]`,
                isActive(link) ? 'bg-background' : 'bg-primary',
                isActive(link) && 'border-primary border-solid border-[1px]'
              )}
            >
              <Icon
                className={cn('text-primary-foreground', isActive(link) ? 'text-primary' : 'text-primary-foreground')}
                size={18}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
const navItems: { title: string; Icon: IconType | IconType; link: string }[] = [
  {
    title: 'chess',
    link: '/chess',
    Icon: FaRegChessKing,
  },
  // {
  //   title: 'checkers',
  //   link: '/checkers',
  //   Icon: BiSolidChess,
  // },
  {
    title: 'Settings',
    link: '/settings',
    Icon: MdOutlineSettings,
  },
];
