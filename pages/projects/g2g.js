import React from 'react';
import Image from 'next/image';
import styles from '../../comps/HomeComps/projects/details.module.css'
import { projects } from '../../comps/HomeComps/projects/constants';
import {   Img } from '../../comps/HomeComps/projects/projectsStyles';

export default function Mim() {
   
    const { title, image, description, visit} = projects[0];
    return (
        <div className={styles.wrapper}>
                <div>
                <h1 className='sectionTitle'>{title}</h1>
                </div>
                <Image
                layout="responsive"
                objectFit="cover"
                alt={title}
                height={250}
                width={1040}
                src={image}
            />  
            {/* <div className={styles.imgBox}>
                <Img src={image} />  
            </div>   */}
               
            <div className={styles.description}>
            <div className={styles.SectionText}>{description}</div>
                <div className={styles.SectionText}>
                     <ul>
                        <a  href={visit} rel="noreferrer">
                            <li>View on Playstore - Android</li>
                        </a>        
                    </ul>
            </div>
                <div className={styles.SectionText}>
                    This app consist of several sections such as:
                <ul>
                    <li>News Sections</li>        
                    <li>Courses Section</li>        
                    <li>Shopping</li>        
                       
                </ul>
            </div>

            </div>
        
         
        </div>
            
    );
}





