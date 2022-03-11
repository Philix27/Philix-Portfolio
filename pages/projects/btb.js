import React from 'react';
import Image from 'next/image';
import styles from '../../comps/HomeComps/projects/details.module.css'
import { projects } from '../../comps/HomeComps/projects/constants';
import {  SectionTitle, SectionText } from '../../styles';

export default function Btb() {
   
    const { title, image, description, visit} = projects[5];
    return (
        <div className={styles.wrapper}>
                <div>
                <SectionTitle >{title}</SectionTitle>
                </div>
                <Image
                layout="responsive"
                objectFit="cover"
                alt={title}
                height={250}
                width={1040}
                src={image}
            />  
         
               
            <div className={styles.description}>
            <SectionText>{description}</SectionText>
            <SectionText>
                    Ideas for this app came from Royal Q -a trading bot system. It aims at using 
                    quantitative analysis of historic data to predict the market movement and 
                    make appropriate decision based on this information.
            </SectionText>
            <SectionText>
                    Flutter is used to design the ui of the app while majority of the backend logic is 
                    down with python. 
            </SectionText>
            <SectionText>
                    Binance account is linked to the bot via account api key
            </SectionText>
            <SectionText>
                    This app consist of several sections:
            </SectionText>
            <SectionText>
                   <ul>
                    <li>Top Coins and Dashboard</li>        
                    <li>Transactions history</li>        
                    <li>Wallet Balance - For each coin</li>        
                </ul>
            </SectionText>
              

            </div>
        
         
        </div>
            
    );
}





