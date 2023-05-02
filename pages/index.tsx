import { HomeLanding } from "../src/views/HomeComps/Landing/Landing";
import About from "../src/views/HomeComps/AboutUs";
import Objectives from "../src/views/HomeComps/objectives";
import Projects from "../src/views/projects/projects";

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
