import React from 'react';
import Image from 'next/image';
import styles from '../../comps/HomeComps/projects/details.module.css'
import { projects } from '../../comps/HomeComps/projects/constants';
import {SectionText } from '../../styles';
import {   Img } from '../../comps/HomeComps/projects/projectsStyles';

export default function Mim() {
   
    const { title, image, description, visit} = projects[2];
    return (
        <div className={styles.wrapper}>
                <div>
                <h1 className='sectionTitle'>{title}</h1>
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
            <div className='sectionText'>{description}</div>
            <div className='sectionText'>
                    This is the mobile app
                    for the website <a href='https://rxedu.online/' rel="noreferrer">rxedu.online</a>.
            </div>
            <div className='sectionText'>
                This app and the website is connected via an api hosted on Heroku.
            </div>
            <div className='sectionText'>
                    <a href={visit} rel="noreferrer">View on Playstore - Android</a>        
            </div>
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





