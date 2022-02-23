// import Image from 'next/image';

import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'
import styles from './projects.module.css'
import {FaGithub, FaHourglassEnd } from 'react-icons/fa'
import { projects } from './constants';
import { GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './projectsStyles';
import { Section, SectionTitle, SectionText } from '../../../styles';


export default function Projects() {
    return (
      <>
        <Section id="projects">
       
          <SectionTitle>Projects</SectionTitle>
        
             <GridContainer>
      {projects.map(({
    title,
    description,
    image,
    tags,
    source,
    visit,
    id,
  }) => (
        <motion.div
          key={id}
          className={styles.card}
          initial={{ x: "-100vw", opacity: 0.1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{duration: 1.7, delay: 1, type: "tween", }}>
          <a href={`/project/${id}`} ><Img src={image} /></a>
        {/* <BlogCard> */}
        <TitleContent>
          <HeaderThree >{title}</HeaderThree>
        </TitleContent>
          <div style={{padding: "0px 20px"}}>
            <SectionText>{description}</SectionText>
        </div>
        <div>
          <TagList>
            {
              tags.map((tag, i) => (
                <Tag key = {i}>{tag} |</Tag>
              ))
            }
          </TagList>
        </div>
       {/* </BlogCard> */}
       </motion.div>
      ))}
    </GridContainer>
           
         </Section>
         <Section>
          <Link href="/project">
            <TitleContent className={styles.btn}>
            View All Projects
            </TitleContent>
          </Link>
         </Section>
      </>
    )
}
