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
              <ul>
                <TechList title="Dart: 2019: - Current" />
                <TechList title="Javascript: 2020 - Current" />
                <TechList title="Java: 2019 - Current" />
                <TechList title="Rust: Current Date" />
                <TechList title="SQL 2018: - Current Date" />
              </ul>
            </div>
          </div>
          <div>
            <h3>Frontend</h3>
            <div className="sectionText">
              <ul>
                <TechList title="Flutter: 2019 - Current Date" />
                <TechList title="React: 2020 - Current Date" />
                <TechList title="Next.js: 2020 - Current Date" />
              </ul>
            </div>
          </div>
          <div>
            <h3>Backend</h3>
            <div className="sectionText">
              <ul>
                <li className="techList"> Node.js: 20201- Current Date </li>
                <li className="techList"> NestJS: 2021 - Current Date </li>
                <li className="techList"> Spring Boot: 2021 - Current Date </li>
              </ul>
            </div>
          </div>
          <div>
            <h3>CSS</h3>
            <div className="sectionText">
              <ul>
                <li className="techList"> Styled Components </li>
                <li className="techList"> SASS - Preferred Choice</li>
                <li className="techList"> Bootstrap </li>
                <li className="techList"> CSS modules </li>
              </ul>
            </div>
          </div>
          <div>
            <h3>Deployment</h3>
            <div className="sectionText">
              <ul>
                <li className="techList"> Heroku </li>
                <li className="techList"> Railway </li>
                <li className="techList"> Vercel - Preferred Choice</li>
                <li className="techList"> Strapi - CMS</li>
              </ul>
            </div>
          </div>
          <div>
            <h3>Cloud</h3>
            <div className="sectionText">
              <ul>
                <li className="techList">Docker </li>
                <li className="techList">Kubernates</li>
                <li className="techList">Apache Kafka</li>
                <li className="techList"> GCP</li>
              </ul>
            </div>
          </div>

          <div>
            <h3>Databases</h3>
            <div className="sectionText">
              <ul>
                <li className="techList">Firebase: 2019 - Current Date </li>
                <li className="techList"> MongoDB: 2020 - Current Date </li>
                <li className="techList"> MySql: 2018 - Current Date </li>
                <li className="techList"> Sqflite </li>
                <li className="techList"> Postgres </li>
                {/* <li className="techList"> Sanity: Current Date </li> */}
              </ul>
            </div>
          </div>

          <div>
            <h3>Other Skills</h3>
            <div className="sectionText">
              <ul>
                <li className="techList"> Github </li>
                <li className="techList"> Jenkins </li>
                <li className="techList"> Gitlab </li>
              </ul>
            </div>
          </div>
        </div>

        <h1 className="sectionTitle">Graphics</h1>

        <div className="content">
          <div>
            <h3>2D Graphics</h3>
            <div className="sectionText">
              <ul>
                <li className="techList">Photoshop: 2015 - Current Date </li>
                <li className="techList"> Illustrator: 2015 - Current Date </li>
                <li className="techList"> Indesign: 2015 - Current Date </li>
              </ul>
            </div>
          </div>

          <div>
            <h3>Motion Graphics</h3>
            <div className="sectionText">
              <ul>
                <li className="techList">Premier Pro </li>
                <li className="techList">After Effects </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
