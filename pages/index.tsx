import { MetaHeader } from "../src/comps/global/meta";
import { AppWrapper } from "../src/comps/wrapper/wrapper";
import HomeView from "../src/views/home";

export default function Home() {
  return (
    <AppWrapper title={"Home"} subtitle={"Welcome to Felix's Website"}>
      <MetaHeader title={"Eligbue Felix | Home Page"} />
      <HomeView />
    </AppWrapper>
  );
}
