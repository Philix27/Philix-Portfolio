import React, { Fragment } from "react";
import GraphicsSection from "./graphics";
import TechSection from "./tech.view";

export default function HomeView() {
  return (
    <Fragment>
      <TechSection />
      <GraphicsSection />
    </Fragment>
  );
}
