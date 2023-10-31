"use client";
import ClientOnly from "./comps/CleintOnly";
import { MetaHeader } from "./comps/global/meta";
import { AppWrapper } from "./comps/wrapper/wrapper";

export default function Home() {
  return (
    <ClientOnly>
      <AppWrapper title={"Home"} subtitle={"Welcome to Felix's Website"}>
        <MetaHeader title={"Eligbue Felix | Home Page"} />
      </AppWrapper>
    </ClientOnly>
  );
}
