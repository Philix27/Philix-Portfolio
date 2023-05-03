import { HomeLanding } from "../src/views/HomeComps/Landing/Landing";
import About from "../src/views/HomeComps/AboutUs";
import Objectives from "../src/views/HomeComps/objectives";
import TechView from "../src/views/tech.view";

export default function Home() {
  return (
    <>
      <HomeLanding />
      <Objectives />
      <About />
      <TechView />
    </>
  );
}
