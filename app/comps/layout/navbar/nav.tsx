'use client';

import Link from 'next/link';
import { MainNavProps } from './site';
import { AppButton, Drawer, TextH, TextP } from '@/comps';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useAppTheme, AppStores, cn } from '@/lib';
import { PiSunLight } from 'react-icons/pi';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';

export function NavbarMarketing(props: MainNavProps) {
  const store = AppStores.useSettingsStore();
  const { setTheme, theme } = useTheme();
  const { gradient } = useAppTheme();
const router = useRouter()
  return (
    <header className={cn('sticky top-0 z-20 w-full', gradient)}>
      <div className="container flex h-[50px] md:h-[60px] items-center justify-between">
        <div className="flex gap-6 md:gap-10 ">
          {/* <img src={'/logoBlue.png'} className="size-[35px] rounded-[17.5px]" /> */}
          <Link href="/" className="items-center space-x-2">
            <TextH v="h3" className={'text-primary font-extrabold tracking-wider'}>
              {props.title}
            </TextH>
          </Link>
        </div>

        <div className="flex items-center justify-center md:gap-x-3">
          <div className={'hidden md:flex w-full gap-x-4'}>
            {props.items?.map((v, i) => {
              if (v.href == 'THEME' || !v.href) {
                return (
                  <div
                    className={`hover:bg-accent p-2 rounded-md hover:[&>p]:text-primary-foreground`}
                    onClick={() => {
                      setTheme(theme === 'light' ? 'dark' : 'light');
                    }}
                  >
                    <PiSunLight />
                  </div>
                );
              } else {
                return (
                  <div key={i} onClick={() => {
                    if (v.href) {
                      router.push(v.href)
                    }
                  }} className={`hover:bg-accent p-2 rounded-md hover:[&>p]:text-primary-foreground`}>
                    <TextP className={'text-primary'}>{v.title}</TextP>
                  </div>
                );
              }
            })}

            <AppButton className="px-4" onClick={() => {}}>
              Hire me
            </AppButton>
          </div>

          <div className={'md:hidden'}>
            {store.drawerIsOpen && <Drawer items={props.items} />}

            {store.drawerIsOpen ? (
              <AiOutlineClose
                className="size-[20px] text-primary"
                onClick={() => {
                  store.update({ drawerIsOpen: false });
                }}
              />
            ) : (
              <AiOutlineMenu
                className="size-[20px] text-primary"
                onClick={() => {
                  store.update({ drawerIsOpen: true });
                }}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
