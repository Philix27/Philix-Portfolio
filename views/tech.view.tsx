import React from "react";
import TechList from "../comps/techlist";

export default function TechView() {
  return (
    <div>
      <div className="tech">
        <h1 className="sectionTitle">Programming</h1>
        <div className="content">
          <div>
            <h3>Languages</h3>
            <div className="sectionText">
              <TechList title="Dart: 2019: - Current" />
              <TechList title="Javascript: 2020 - Current" />
              <TechList title="Java: 2019 - Current" />
              <TechList title="Rust: Current Date" />
              <TechList title="SQL 2018: - Current Date" />
            </div>
          </div>
          <div>
            <h3>Frontend</h3>
            <div className="sectionText">
              <TechList title="Flutter: 2019 - Current Date" />
              <TechList title="React: 2020 - Current Date" />
              <TechList title="Next.js: 2020 - Current Date" />
            </div>
          </div>
          <div>
            <h3>Backend</h3>
            <div className="sectionText">
              <TechList title="Node.js: 20201- Current Date" />
              <TechList title="NestJS: 2021 - Current Date" />
              <TechList title="Spring Boot: 2021 - Current Date" />
            </div>
          </div>
          <div>
            <h3>CSS</h3>
            <div className="sectionText">
              <TechList title="Styled Components" />
              <TechList title="SASS - Preferred Choice" />
              <TechList title="Bootstrap" />
              <TechList title="CSS modules" />
            </div>
          </div>
          <div>
            <h3>Deployment</h3>
            <div className="sectionText">
              <TechList title="Heroku" />
              <TechList title="Railway" />
              <TechList title="Vercel - Preferred Choice" />
              <TechList title="Strapi - CMS" />
            </div>
          </div>
          <div>
            <h3>Cloud</h3>
            <div className="sectionText">
              <TechList title="Docker" />
              <TechList title="Kubernates" />
              <TechList title="Apache Kafka" />
              <TechList title="GCP" />
            </div>
          </div>

          <div>
            <h3>Databases</h3>
            <div className="sectionText">
              <TechList title="Firebase: 2019 - Current Date" />
              <TechList title="MongoDB: 2020 - Current Date" />
              <TechList title="MySql: 2018 - Current Date" />
              <TechList title="Sqflite" />
              <TechList title="Postgres" />
              {/* <TechList title="Sanity: Current Date" /> */}
            </div>
          </div>

          <div>
            <h3>Other Skills</h3>
            <div className="sectionText">
              <TechList title="Github" />
              <TechList title="Jenkins" />
              <TechList title="Gitlab" />
            </div>
          </div>
        </div>

        <h1 className="sectionTitle">Graphics</h1>
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
              <TechList title="After Effects" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
