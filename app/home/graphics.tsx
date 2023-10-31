import React from "react";
import TechList from "../comps/techlist";

export default function GraphicsSection() {
  return (
    <div className="section">
      <h1 className="sectionTitle">Graphics</h1>
      <div className="tech">
        <div className="content">
          <div>
            <h3>2D Graphics</h3>
            <div className="sectionText">
              <TechList title="Photoshop: 2015 - Current Date" />
              <TechList title="Illustrator: 2015 - Current Date" />
              <TechList title="Indesign: 2015 - Current Date" />
            </div>
          </div>

          <div>
            <h3>Motion Graphics</h3>
            <div className="sectionText">
              <TechList title="Premier Pro" />
              <TechList title="DaVinci Resolve" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
