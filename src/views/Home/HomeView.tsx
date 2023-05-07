import React from "react";
import { PlainLanding } from "../../comps/Landing";
import About from "./AboutUs/about";
import GraphicsSection from "./graphics";
import Objectives from "./objectives/objectives";
import TechSection from "./tech.view";

export default function HomeView() {
  return (
    <>
      <PlainLanding
        title={"Welcome"}
        subtitle={"Felix Eligbue"}
        imageUrl={"/images/dev.png"}
      />
      <Objectives />
      <About />
      <TechSection />
      <GraphicsSection />
    </>
  );
}
