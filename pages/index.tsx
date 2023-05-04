import { HomeLanding } from "../src/views/Home/Landing/Landing";
import About from "../src/views/Home/AboutUs";
import Objectives from "../src/views/Home/objectives";
import TechView from "../src/views/Home/tech.view";

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
