import { AppWrapper } from "@/comps";
import AboutClient from "./client";
import { Metadata } from "next";

export default function AboutUsPage() {
  return (
    <AppWrapper title={"Author"} subtitle={"More info about Felix"}>
      <AboutClient />
    </AppWrapper>
  );
}


export const metadata: Metadata = {
  title: "Eligbue Felix",
  description: "About us",
};
