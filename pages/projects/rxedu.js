import React from 'react';
import Image from 'next/image';
import styles from '../../comps/HomeComps/projects/details.module.css'
import { projects } from '../../comps/HomeComps/projects/constants';
import { Section, SectionTitle, SectionText } from '../../styles';
import {   Img } from '../../comps/HomeComps/projects/projectsStyles';

export default function Mim() {
   
    const { title, image, description, visit} = projects[2];
    return (
        <div className={styles.wrapper}>
                <div>
                <SectionTitle >{title}</SectionTitle>
                </div>
                <Image
                layout="responsive"
                objectFit="cover"
                height={250}
                width={1040}
                src={image}
                alt={title}
            />  
            {/* <div className={styles.imgBox}>
                <Img src={image} />  
            </div>   */}
               
            <div className={styles.description}>
            <SectionText>{description}</SectionText>
            <SectionText>
                    This is the mobile app
                    for the website <a href='https://rxedu.online/' rel="noreferrer">rxedu.online</a>.
            </SectionText>
            <SectionText>
                This app and the website is connected via an api hosted on Heroku.
            </SectionText>
            <SectionText>
                    <a href={visit} rel="noreferrer">View on Playstore - Android</a>        
            </SectionText>
                {/* <div className={styles.SectionText}>
                    This app consist of several pages which will be discussed in a bit.
                <ul>
                    <li>Dashboard</li>        
                    <li>Daily Sales</li>        
                    <li>Expensens</li>        
                    <li>Products List</li>        
                    <li>Summary</li>        
                    <li>Notification Page</li>        
                </ul>
            </div> */}

            </div>
        
         
        </div>
            
    );
}





