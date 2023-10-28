import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import styles from "./projects.module.scss";
import { projects } from "./constants";
import styled from "styled-components";

export default function Projects() {
  const listic = [projects[0], projects[1], projects[3], projects[4]];
  return (
    <>
      <div className="section" id="projects">
        <h1 className="sectionTitle">Projects</h1>

        <div className={styles.gridContainer}>
          {listic.map(
            ({
              title,
              description,
              image,
              detailsPage,
              tags,
              source,
              visit,
              id,
            }) => (
              <div key={id} className={styles.card}>
                <Link href={detailsPage} passHref>
                  <img className={styles.img} src={image} alt="cover" />
                </Link>
                <h5>{title}</h5>
                <div style={{ padding: "0px 20px" }}>
                  <div className="sectionText">{description}</div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div className="section">
        <Link href="/projects">
          <a className="btn">View All</a>
        </Link>
      </div>
    </>
  );
}



const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column; */
  /* align-items: center;
  justify-content: center; */
  text-align: center;
  padding-top: 20px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  // visibility: hidden;
  object-fit: cover;
  overflow: hidden;
`;
const Card = styled.div`
  background-color: #fff;
  /* padding: 20px; */
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  text-align: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;
const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 3rem;
  column-gap: 3rem;
  row-gap: 3rem;
`;
