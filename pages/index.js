import { HomeLanding } from "../comps/HomeComps/Landing/Landing";
import About from "../comps/HomeComps/AboutUs/";
import Objectives from "../comps/HomeComps/objectives/";
import Projects from "../comps/projects/projects";

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
