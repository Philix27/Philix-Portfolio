import { MetaHeader } from "comps/global/meta";
import { AppWrapper } from "comps/wrapper/wrapper";
import HomeView from "views/home";
// import HomeView from "views/home";

export default function Home() {
  return (
    <AppWrapper title={"Home"} subtitle={"Welcome to Felix's Website"}>
      <MetaHeader title={"Eligbue Felix | Home Page"} />
      <HomeView />
    </AppWrapper>
  );
}
