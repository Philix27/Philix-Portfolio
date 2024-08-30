"use client";

import React from "react";

import { TextH, TextP } from "@/comps";
import { cn, useAppTheme } from "@/lib";
import { motion } from "framer-motion";

export function CardsSection(props: {
  className?: string;
  data: {
    title: string;
    img: string;
    subtitle: string;
  }[];
}) {
  const { gradient } = useAppTheme();
  return (
    <section
      className={cn(
        "md:flex w-full flex items-center justify-center",
        props.className,
      )}
    >
      <div
        className={`md:w-[80%] w-[90%]
      grid md:grid-cols-3 grid-cols-1 
       my-5 gap-2 mx-0
    `}
      >
        {props.data.map((item, i) => (
          <motion.div
            initial={{ x: -10, opacity: 0.5, translateX: -20 }}
            animate={{ x: 0, opacity: 1, translateX: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className={cn(
              "border-r-ring md:mx-2 rounded-3xl mb-3 md:mb-5",
              gradient,
            )}
            key={i}
          >
            <div className={"w-full flex items-center justify-center mb-2"}>
              <img
                src={item.img}
                className={"md:w-full h-[300px] w-full rounded-lg"}
              />
            </div>

            <div className="px-4 py-4">
              <TextH v="h3" className="mb-4 tracking-wide">
                {item.title}
              </TextH>
              <TextP v="p5">{item.subtitle}</TextP>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
