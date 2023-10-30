import HomeView from "views/home";
import { MetaHeader } from "comps/global/meta";
import { AppWrapper } from "comps/wrapper/wrapper";

export default function Home() {
  return (
    <AppWrapper title={"Home"} subtitle={"Welcome to Felix's Website"}>
      <MetaHeader title={"Eligbue Felix | Home Page"} />
      <HomeView />
    </AppWrapper>
  );
}
