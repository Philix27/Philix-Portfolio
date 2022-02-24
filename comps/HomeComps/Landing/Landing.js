import React from 'react'
import styles from './Landing.module.css'
import {Section, Content, SectionTitle } from './LandingStyles'
import {Btn } from '../../../styles'

export const HomeLanding = () => {

    return (
      <div id='home' className={styles.container}> 
       <Content>
              <SectionTitle>Hi, I'm Felix Eligbue</SectionTitle>
           
          <p className={styles.smallText}>
            Full Stack Developer and a Pharmacist  
          </p> 
         
            <a href="/docs/res.pdf" download="philix_cv" >
            <Btn>Resume</Btn>
          </a>
          
        </Content>
      </div>
    )
}


