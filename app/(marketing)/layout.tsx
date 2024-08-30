"use client";
import React, { ReactNode } from "react";
import { NavItems, NavbarMarketing } from "@/comps";
import Footer from "./_comps/footer";

export default function MarketingLayout(props: { children: ReactNode }) {
  return (
    <div className="h-screen">
      <NavbarMarketing title={"Philix"} items={NavItems} />
      <div className="min-h-[calc(100vh-70px)] mt-[100px]">
        {props.children}
      </div>
      <div className="md:block">
        <Footer />
      </div>
    </div>
  );
}
