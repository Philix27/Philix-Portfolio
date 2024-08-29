import { TextH, TextP } from '@/comps';
import { cn } from '@/lib';
import Link from 'next/link';
import { IconType } from 'react-icons';

export type IDashboard = { title: string; subTitle: string; link: string; color: string; icon: IconType };
export function DashboardItems(props: { data: IDashboard[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-2 px-6 py-4 mt-[50px]">
      {props.data.map((val, i) => {
        const Icon = val.icon;
        return (
          <Link key={i} href={val.link}>
            <div
              key={i}
              className={cn(`px-3 py-2 rounded-md bg-card border-[0.1px] flex flex-col items-center justify-center`)}
            >
              <TextH className={'tracking-wide text-card-foreground my-1 text-sm'}>{val.title}</TextH>
              <hr className="border-[0.1px] border-primary w-full" />
              <TextP className="mb-4 text-slate-500 text-sm text-center my-2">{val.subTitle}</TextP>
              <Icon size={40} className="mb-2 text-primary" />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
