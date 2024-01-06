"use client";
import { HomeView } from "./(pages)/home";
import { ClientOnly, MetaHeader, AppWrapper } from "@/comps";

export default function Home() {
  return (
    <ClientOnly>
      <AppWrapper title={"Articles"} subtitle={"Series of all articles"}>
        <MetaHeader title={"Eligbue Felix | Home Page"} />
        <HomeView />
      </AppWrapper>
    </ClientOnly>
  );
}
