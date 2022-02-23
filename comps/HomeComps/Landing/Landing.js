// import Image from 'next/image';
import React from 'react'
import styles from './Landing.module.css'
import {Section, Content, SectionTitle, Img, Linka } from './LandingStyles'

export const HomeLanding = () => {

    return (
      <div id='home' className={styles.container}> 
        {/* <Image src='/images/dark.jpg' width={700} height={400} /> */}
       <Content>
              <SectionTitle>Hi, I'm Felix Eligbue</SectionTitle>
           
          <p className={styles.smallText}>
            A Developer and a Pharmacist  
          </p> 

          <div className={styles.btn}>

           <Linka  href="/docs/res.pdf" download="philix_cv">Download Resume</Linka>
          </div>

  
          
       </Content>
      </div>
    )
}


