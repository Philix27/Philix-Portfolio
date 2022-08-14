import React from 'react';
import Image from 'next/image';
import styles from '../../comps/HomeComps/projects/details.module.css'
import { projects } from '../../comps/HomeComps/projects/constants';

export default function Btb() {
   
    const { title, image, description, visit} = projects[5];
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
         
               
            <div className={styles.description}>
            <div className='sectionText'>{description}</div>
            <div className='sectionText'>
                    Ideas for this app came from Royal Q -a trading bot system. It aims at using 
                    quantitative analysis of historic data to predict the market movement and 
                    make appropriate decision based on this information.
            </div>
            <div className='sectionText'>
                    Flutter is used to design the ui of the app while majority of the backend logic is 
                    down with python. 
            </div>
            <div className='sectionText'>
                    Binance account is linked to the bot via account api key
            </div>
            <div className='sectionText'>
                    This app consist of several sections:
            </div>
            <div className='sectionText'>
                   <ul>
                    <li>Top Coins and Dashboard</li>        
                    <li>Transactions history</li>        
                    <li>Wallet Balance - For each coin</li>        
                </ul>
            </div>
              

            </div>
        
         
        </div>
            
    );
}





