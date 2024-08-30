import { HomeView } from "./(pages)/home";
import { ClientOnly, MetaHeader, AppWrapper } from "@/comps";
import { Metadata } from "next";

export default function Home() {
  return (
    <ClientOnly>
      <HomeView />
    </ClientOnly>
  );
}

export const metadata: Metadata = {
  title: "Eligbue Felix",
  description: "Home Page",
};
 