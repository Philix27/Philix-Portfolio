import { AppWrapper } from "comps";
import HomeView from "views/home";

export default function Home() {
  return (
    <AppWrapper title={"Home"} subtitle={"Welcome to Felix's Website"}>
      <HomeView />
    </AppWrapper>
  );
}
