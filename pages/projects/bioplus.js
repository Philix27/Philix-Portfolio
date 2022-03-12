import React from 'react';
import Image from 'next/image';
import styles from '../../comps/HomeComps/projects/details.module.css'
import { projects } from '../../comps/HomeComps/projects/constants';

export default function Mim() {
   
    const { title, image, description, visit} = projects[4];
    return (
        <div className={styles.wrapper}>
                <div>
                <h1 className='sectionTitle' >{title}</h1>
                </div>
            <Image
                alt={title}
                layout="responsive"
                objectFit="cover"
                height={250}
                width={1040}
                src={image}
            />  
          
               
            <div className={styles.description}>
            <div className='sectionText'>{description}</div>
                {/* <div className={styles.div}>
                     <ul>
                    <a href={visit} target="_blank" rel="noreferrer"><li>View Source Code on Github</li></a>        
                    <a><li>View on Playstore - Android</li></a>        
                          
                </ul>
            </div> */}
               

            </div>
        
         
        </div>
            
    );
}





