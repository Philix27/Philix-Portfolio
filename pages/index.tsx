import { HomeLanding } from "../views/HomeComps/Landing/Landing";
import About from "../views/HomeComps/AboutUs";
import Objectives from "../views/HomeComps/objectives";
import Projects from "../views/projects/projects";

export default function Home() {
  return (
    <>
      <HomeLanding />
      <Objectives />
      {/* <Projects /> */}
      <About />
    </>
  );
}
