import { TextH, TextP, AppTextInput } from '@/comps';
import React from 'react';

export default function ContactUsPage() {
  return (
    <div className={`flex w-full h-full`}>
      <div className={'w-[50%] bg-teal-700 hidden md:block'}>Image</div>
      <div className={'md:w-[50%] w-full h-full flex flex-col items-center justify-center'}>
        <div className="w-1/2 mb-4">
          <TextH>Title</TextH>
          <TextP>WhatsApp</TextP>
          <TextP>LinkedIn</TextP>
          <TextP>Instagram</TextP>
          <TextP>Support Email</TextP>
        </div>
        <div className={`gap-y-4 w-1/2`}>
          <AppTextInput control={undefined} name={'title'} label="Title" place="Tile of your message" />
          <AppTextInput control={undefined} name={'email'} label="Email" place="Your email to receive response" />
          <AppTextInput control={undefined} name={'message'} label="Message" place="Enter your message" />
        </div>
      </div>
    </div>
  );
}
