import React from 'react'
import styles from './Landing.module.css'
import {Section, Content, SectionTitle } from './LandingStyles'

export const HomeLanding = () => {

    return (
      <div id='home' className={styles.container}> 
       <Content>
              <SectionTitle>Hi, I'm Felix Eligbue</SectionTitle>
           
          <p className={styles.smallText}>
            A Developer and a Pharmacist  
          </p> 

          <div className={styles.btn}>

           <a  href="/docs/res.pdf" download="philix_cv">Download Resume</a>
          </div>

  
          
       </Content>
      </div>
    )
}


