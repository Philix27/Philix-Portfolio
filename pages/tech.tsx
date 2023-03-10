import { Landing } from "../views/globalComps/Landing";
import TechView from "../views/tech.view";

export default function TechPage() {
  return (
    <>
      <Landing
        title="Tech Stack"
        imgUrl="../images/dark.jpg"
        subtitle="Technological Stacks"
        opacity={0.3}
      />
      <TechView />
    </>
  );
}
