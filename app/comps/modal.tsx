"use client"
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

export function ModalWrapper(props: { children: ReactNode }) {
  return (
    <div
      className={`bg-black/50 w-full 
      fixed left-0 z-10
      top-0 mt-[50px]
      h-screen
      flex flex-col items-center
      justify-center`}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="bg-background w-[90%] md:w-[50%] lg:w-[75%] rounded-lg px-4 py-4"
      >
        {props.children}
      </motion.div>
    </div>
  );
}
