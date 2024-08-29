'use client';

import { TextH, TextP } from '@/comps';
import { chatData } from './data';
import { useRouter } from 'next/navigation';

export default function ChatPage() {
  const router = useRouter();
  return (
    <div className="mt-10">
      {chatData.map((val, i) => (
        <div key={i} className={`flex item-center justify-between px-4 py-2 mb-1 border-b-[0.5px]`} onClick={()=>{router.push("/messages")}}>
          <div className="flex">
            <div className={` rounded-[25px] bg-white h-[50px] w-[50px] mr-5`}>
              <img src={val.img} />
            </div>

            <div className={``}>
              <TextH>{val.name}</TextH>
              <TextP>{val.lastMsg}</TextP>
            </div>
          </div>

          <TextP v="p6">{val.lastTime}</TextP>
        </div>
      ))}
    </div>
  );
}
