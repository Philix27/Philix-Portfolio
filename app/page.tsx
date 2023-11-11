"use client";
import ClientOnly from "./comps/CleintOnly";
import { MetaHeader } from "./comps/global/meta";
import { AppWrapper } from "./comps/wrapper/wrapper";
import HomeView from "./home";

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
