import React from "react";
import styles from "./About.module.scss";

export default function AboutsView() {
  return (
    <div className="section">
      <h1>About</h1>
      <br />
      <br />
      <div className={styles.content}>
        <div className={styles.ceo}>
          {/* <Image src="/pp.jpg" width={500} height={500}/> */}
          <img className={styles.img} src="/pp.jpg" alt="Eligbue Felix" />
        </div>
        <div className={styles.education}>
          <h3>Education</h3>
          <div className="sectionText">
            <ul>
              <li>
                Graduated from Delta State University Abraka, Nigeria (DELSU):
                2013 - 2019. First Degree: Pharmacy at Delta State University
                (2012 - 2019).
              </li>
              <li>Served (NYSC) at Kebbi State (2021 - 2022).</li>
            </ul>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
