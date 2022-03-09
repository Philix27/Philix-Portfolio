import React from 'react';
import Image from 'next/image';
import styles from '../../comps/HomeComps/projects/details.module.css'
import { projects } from '../../comps/HomeComps/projects/constants';
import { Section, SectionTitle, SectionText } from '../../styles';
import {   Img } from '../../comps/HomeComps/projects/projectsStyles';

export default function Mim() {
   
    const { title, image, description, visit} = projects[4];
    return (
        <div className={styles.wrapper}>
                <div>
                <SectionTitle >{title}</SectionTitle>
                </div>
            <Image
                alt={title}
                layout="responsive"
                objectFit="cover"
                height={250}
                width={1040}
                src={image}
            />  
            {/* <div className={styles.imgBox}>
                <Img src={image} />  
            </div>   */}
               
            <div className={styles.description}>
            <SectionText>{description}</SectionText>
                {/* <div className={styles.SectionText}>
                     <ul>
                    <a href={visit} target="_blank" rel="noreferrer"><li>View Source Code on Github</li></a>        
                    <a><li>View on Playstore - Android</li></a>        
                          
                </ul>
            </div> */}
               

            </div>
        
         
        </div>
            
    );
}





