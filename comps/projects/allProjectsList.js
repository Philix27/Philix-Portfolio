import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import styles from "./projects.module.css";
// import { projects } from "./constants";
import { HeaderThree, Tag, TagList, TitleContent } from "./projectsStyles";

export default function ProjectsGroup({ category, projectCol }) {
  const projectll = projectCol.filter((project) => {
    return project.frontmatter.category == category;
  });

  return (
    <div className="section">
      <div className={styles.gridContainer}>
        {projectll.map(({ slug, frontmatter }, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ x: "-100vw", opacity: 0.1 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.7, delay: 1, type: "tween" }}
          >
            {/* <Link href=`/project/1${id}`><a><Img src={image} /> </a></Link> */}
            <Link href={`/projects/${slug}`} target="_blank">
              <a>
                <img className={styles.img} src={frontmatter.cover_image} />{" "}
              </a>
            </Link>

            <TitleContent>
              <HeaderThree>{frontmatter.title}</HeaderThree>
            </TitleContent>
            <div style={{ padding: "0px 20px" }}>
              <div className="sectionText">{frontmatter.summary}</div>
              {/* <CardInfo>{description}</CardInfo> */}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
