'use client';
import { AppStores, cn } from '@/lib';
import { TextP } from '@/comps';

export function Tabs(props: { data: { title: string; isActive: boolean; onClick: VoidFunction }[] }) {
  const store = AppStores.useSettingsStore();
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        {props.data.map((val, i) => (
          <div
            key={i}
            className={cn(
              'flex items-center justify-center bg-secondary w-full px-3 py-2',
              val.isActive && 'border-primary border-b-2'
            )}
            onClick={val.onClick}
          >
            <TextP>{val.title}</TextP>
          </div>
        ))}
      </div>
    </div>
  );
}
