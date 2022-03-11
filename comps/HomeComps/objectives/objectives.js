import React from 'react'
import styles from './About.module.css'
import { Section, SectionTitle, SectionJumbotron } from '../../../styles';




export default function Objectives() {

    return (
        <Section id="objectives">
            <SectionTitle>Objectives</SectionTitle>
            <div className={styles.content}>
                <div >
                    <SectionJumbotron>
                        I am a dedicated developer who aims at making my community
                        and the world a better place through the use of Technology.
                    </SectionJumbotron>      
                </div>
                <div >
                    <SectionJumbotron>
                        An open minded individual and a Life Long Learner
                    </SectionJumbotron>      
                </div>
            </div>           
        </Section>
    )
}
