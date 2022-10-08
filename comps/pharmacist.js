import React from "react";

export default function About() {
  return (
    <div className="section pharmacist" id="pharmacist">
      <div className="imgContainer">
        <img className="img" src="/labcoat.jpg" alt="Eligbue Felix" />
      </div>

      <h1 className="sectionTitle">Pharmacy Experience</h1>
      <br />
      <br />

      <div>
        <div>
          <h3>Hospital Experience</h3>
          <div className="sectionText">
            <ul>
              <li className="techList">FMC Asaba, Delta State: 2017 </li>
              <li className="techList">
                DELSUTH Oghara, Delta State: 2019 - 2020{" "}
              </li>
              <li className="techList">
                General Hospital Zauro, Kebbi State: 2021 - 2022{" "}
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3>Community Pharmacy Practice</h3>
          <div className="sectionText">
            <ul>
              <li className="techList">
                Care First Pharmacy, Abraka Delta State: 2020 - 2021{" "}
              </li>
              <li className="techList">
                Kareda Pharmacy, Asaba Delta State: 2022 - Currently{" "}
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3>Project Works</h3>
          <div className="sectionText">
            <ul>
              <li className="techList">
                Avaliability of Antibiotics as OTC in community Pharcies in
                Delta State - Undergraduate{" "}
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3>Tech Project</h3>
          <div className="sectionText">
            <ul>
              <li className="techList">
                Rxedu - Pharmacy Learning Platform - Collaboration with Pharm
                Austine Odibo
              </li>
              <li className="techList">
                Pharmahub - Pharmacy Questions and Answer Forum - Collaboration
                with Pharm Austine Odibo
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
