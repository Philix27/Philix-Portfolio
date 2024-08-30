import { AppButton } from '@/comps';
import React from 'react';
import { FaGithub, FaGitlab, FaLinkedin } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <div className="h-[70px] w-full bg-background flex items-center justify-center">
      <div className="flex items-center gap-x-6 w-fit text-2xl my-4">
        <FaGithub className="hover:text-primary" />
        <FaGitlab className="hover:text-primary" />
        <FaLinkedin className="hover:text-primary" />
        <MdEmail className="hover:text-primary" />
      </div>
    </div>
  );
}
