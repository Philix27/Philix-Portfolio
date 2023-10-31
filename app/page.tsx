import ClientOnly from "./comps/CleintOnly";
import { MetaHeader } from "./comps/global/meta";
import { AppWrapper } from "./comps/wrapper/wrapper";
import HomeView from "./home";

export default function Home() {
  return (
    <ClientOnly>
      {/* <AppWrapper title={"Home"} subtitle={"Welcome to Felix's Website"}> */}
      {/* <MetaHeader title={"Eligbue Felix | Home Page"} /> */}
      {/* <HomeView /> */}
      {/* </AppWrapper> */}
    </ClientOnly>
  );
}
