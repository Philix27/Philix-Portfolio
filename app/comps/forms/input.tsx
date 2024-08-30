'use client';

import React, { useState } from 'react';
import { TextP } from '@/comps';
import { cn } from '@/lib';
import { FieldValues, Path } from 'react-hook-form';
import { CiLock } from 'react-icons/ci';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';

interface IProps<T> extends React.InputHTMLAttributes<HTMLInputElement> {
  isPassword?: boolean;
  control: any;
  /** name to be used as label */
  name: Path<T>;
  /** placeholder */
  place?: string;
  /** Description */
  desc?: string;
  label?: string;
  type?: 'text' | 'number' | 'date' | 'file';
  errorMessage?: string;
  className?: string;
}

export function AppInput(props: IProps<FieldValues>) {
  const [showPassword, setToggle] = useState(false);

  return (
    <div className={cn('flex-[1] w-full mb-2', props.className)}>
      <div className="flex flex-col items-start">
        {props.label && (
          <div className="pb-2">
            <TextP v="p5">{props.label}</TextP>
          </div>
        )}

        <div
          className={cn(
            `flex justify-between 
            items-center border rounded-md 
            w-full px-2`,
            props.errorMessage ? 'border-red-600' : 'border-input'
          )}
        >
          {props.isPassword && <CiLock className={cn('mx-2', props.errorMessage && 'text-red-600')} />}

          <input
            placeholder={props.place}
            type={props.isPassword && !showPassword ? 'password' : props.type}
            className={cn(
              `flex h-12 w-full rounded-md text-slate-800
              border-none outline-none bg-transparent
              `
            )}
            {...props}
            {...props.control}
          />

          {props.isPassword &&
            (showPassword ? (
              <IoEyeOutline
                onClick={() => {
                  setToggle(false);
                  console.log('Clicked on');
                }}
              />
            ) : (
              <IoEyeOffOutline
                onClick={() => {
                  setToggle(true);
                  console.log('Clicked off');
                }}
              />
            ))}
        </div>
        {props.errorMessage && <TextP className={`text-red-500 my-2`}>{props.errorMessage}</TextP>}
      </div>
    </div>
  );
}
