import { Landing } from "../src/views/globalComps/Landing";
import TechView from "../src/views/tech.view";

export default function TechPage() {
  return (
    <>
      <Landing
        title="Tech Stack"
        imgUrl="../images/dark.jpg"
        subtitle=""
        opacity={0.3}
      />
      <TechView />
    </>
  );
}
