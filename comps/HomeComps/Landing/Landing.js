import styles from './Landing.module.css'
import {Content, SectionTitle, SmallText } from './LandingStyles'
import {Btn } from '../../../styles'

export const HomeLanding = () => {

    return (
      <div id='home' className={styles.container}> 
       <Content>
              <SectionTitle>Hi, I'm Felix Eligbue</SectionTitle>
           
          <SmallText>
            Full Stack Developer and a Pharmacist  
          </SmallText> 
         
            <a href="/docs/res.pdf" download="philix_cv" >
            <Btn>Resume</Btn>
          </a>
          
        </Content>
      </div>
    )
}


