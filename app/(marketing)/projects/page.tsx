'use client';
import { TextH, TextP, AppTextInput } from '@/comps';
import React from 'react';
import { projectData } from './data';
import { cn, useAppTheme } from '@/lib';

export default function ContactUsPage() {
  const { gradient } = useAppTheme();

  return (
    <div className={`flex w-full h-full items-center justify-center`}>
      <div className="grid grid-cols-2 gap-2">
        {projectData.map((val, i) => (
          <div key={i} className={cn('bg-card rounded-lg p-2 border', gradient)}>
            <div>
              <TextH>{val.title} </TextH>
              <TextP>{val.subtitle} </TextP>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
