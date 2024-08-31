"use client";

import React from "react";

import { CardsSection, JumbutronSection, HeroWithImg } from "../_comps";
import { AppButton, TextH, TextP } from "@/comps";
import { cardData, imageLessData } from "./cards";
import { useRouter } from "next/navigation";
import { FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useAppTheme } from "@/lib";
import { CardsLessSection } from "../_comps/cardless";
import Link from "next/link";
import { ExperienceSection } from "./experience";

export function HomeSection() {
  const router = useRouter();
  const { gradient } = useAppTheme();
  return (
    <div className={"flex flex-col items-center justify-center w-full"}>
      <HeroWithImg img={"/profile.jpg"} className="my-4" bg={gradient}>
        <div className="h-full">
          <TextH
            v="h3"
            className={
              "text-[20px] font-extrabold md:text-[35px] text-card-foreground tracking-normal"
            }
          >
            Hello, I am Felix Eligbue a Fullstack Engineer
          </TextH>
          <TextP>
            Fullstack Typescript developer with over 4 years of professional
            experience. I enjoy working on innovative projects and also Web3
            ideas.
          </TextP>
          <div className="flex items-center gap-x-4 w-full text-2xl my-4">
            <AppButton className="w-fit py-1">Hire me</AppButton>
            <Link href={"https://github.com/Philix27"}>
              <FaGithub className="hover:text-primary" />
            </Link>
            <Link href={"https://gitlab.com/Philix27"}>
              <FaGitlab className="hover:text-primary" />
            </Link>
            <Link href={"https://www.linkedin.com/in/philix/"}>
              <FaLinkedin className="hover:text-primary" />
            </Link>
            <MdEmail className="hover:text-primary" />
          </div>
        </div>
      </HeroWithImg>
      {/* <JumbutronSection title={"Stay Real"} subtitle="" /> */}
      {/* <CardsLessSection data={imageLessData} /> */}
      <JumbutronSection title={"Skills"} subtitle="" />
      <CardsSection data={cardData} />
      <JumbutronSection title={"Work Experience"} subtitle="" />
      <ExperienceSection />
    </div>
  );
}
