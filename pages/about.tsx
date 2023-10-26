import AboutsView from "src/views/about";
import AppWrapper from "../src/comps/wrapper/wrapper";

export default function AboutUsPage() {
  return (
    <AppWrapper title={"About up page"} subtitle={"More info about Felix"}>
      <AboutsView />
    </AppWrapper>
  );
}
