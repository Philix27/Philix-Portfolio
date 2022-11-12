import About from "../comps/HomeComps/AboutUs/";
import { Landing } from "../comps/globalComps/Landing";

export default function Tech() {
  return (
    <>
      <Landing
        title="Tech Stack"
        imgUrl="../images/dark.jpg"
        subtitle="Technological Stacks"
        opacity={0.3}
      />

      <div className="tech">
        <h1 className="sectionTitle">Programming</h1>
        <div className="content">
          <div>
            <h3>Programming Languages</h3>
            <div className="sectionText">
              <ul>
                <li className="techList"> Dart: 2019: - 2022 </li>
                <li className="techList"> Javascript: 2020 - 2022 </li>
                <li className="techList"> Python: 2021 - 2022 </li>
                <li className="techList"> Solidity: 2021 - 2022 </li>
                <li className="techList"> Rust: 2022 </li>
                <li className="techList"> SQL 2018: - 2022 </li>
              </ul>
            </div>
          </div>
          <div>
            <h3>Technologies</h3>
            <div className="sectionText">
              <ul>
                <li className="techList"> Flutter: 2019 - 2022 </li>
                <li className="techList"> React: 2020 - 2022 </li>
                <li className="techList"> Next.js: 2020 - 2022 </li>
                <li className="techList"> Node.js: 20201- 2022 </li>
                <li className="techList"> FastApi: 20201- 2022 </li>
                <li className="techList"> Pandas: 20201- 2022 </li>
                <li className="techList"> Matplotlib: 20201- 2022 </li>
                <li className="techList"> Github </li>
              </ul>
            </div>
          </div>
          <div>
            <h3>CSS Technologies</h3>
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
            <h3>Backend Technologies</h3>
            <div className="sectionText">
              <ul>
                <li className="techList"> Heroku </li>
                <li className="techList"> Vercel - Preferred Choice</li>
                <li className="techList"> Strapi - CMS</li>
              </ul>
            </div>
          </div>
          <div>
            <h3>Cloud Technologies</h3>
            <div className="sectionText">
              <ul>
                <li className="techList">Docker </li>
                <li className="techList"> Kubernates</li>
                <li className="techList"> GCP</li>
              </ul>
            </div>
          </div>

          <div>
            <h3>Databases</h3>
            <div className="sectionText">
              <ul>
                <li className="techList">Firebase: 2019 - 2022 </li>
                <li className="techList"> MongoDB: 2020 - 2022 </li>
                <li className="techList"> MySql: 2018 - 2022 </li>
                <li className="techList"> Sqflite </li>
                <li className="techList"> Postgres </li>
                {/* <li className="techList"> Sanity: 2022 </li> */}
              </ul>
            </div>
          </div>

          <div>
            <h3>Other Skills</h3>
            <div className="sectionText">
              <ul>
                <li className="techList">Photoshop: 2015 - 2022 </li>
                <li className="techList"> Illustrator: 2015 - 2022 </li>
                <li className="techList"> Indesign: 2015 - 2022 </li>
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
                <li className="techList">Photoshop: 2015 - 2022 </li>
                <li className="techList"> Illustrator: 2015 - 2022 </li>
                <li className="techList"> Indesign: 2015 - 2022 </li>
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
    </>
  );
}
