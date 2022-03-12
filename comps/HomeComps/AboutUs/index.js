import React from 'react'
import styles from './About.module.css'
import {  SectionText } from '../../../styles';




export default function About() {

    return (
        <div className='section' id="about">
            <h1 className='sectionTitle'>About</h1>
             <br/>
            <br/>
            <div className={styles.content}>
                <div className={styles.ceo}>
                    {/* <Image src="/pp.jpg" width={500} height={500}/> */}
                <img className={styles.img} src="/pp.jpg" alt=""/>
                </div>
                <div className={styles.education}>
                    <h3>Education</h3>
                    <SectionText>
                        <ul>
                            <li>
                                Graduated from Delta State University
                                Abraka, Nigeria (DELSU): 2013 - 2019.
                                First Degree: Pharmacy at Delta
                                State University (2012 - 2019).
                            </li>
                            <li>
                                Currently serving (NYSC) at Kebbi State.
                            </li>
                        </ul>
                    </SectionText>      
                </div>
            </div>
             <br/>
            {/* <br/> */}
            <h1 className='sectionTitle'>Technologies</h1>
             <br/>
            <div className={styles.content}>
                <div>
                    <h3>Programming Languages</h3>
                    <SectionText>
                        <ul >
                            <li className={styles.techList}> Dart: 2019: - 2022 </li>
                            <li className={styles.techList}> Javascript: 2020 - 2022 </li>
                            <li className={styles.techList}> Python: 2021 - 2022 </li>
                            <li className={styles.techList}> Solidity: 2021 - 2022 </li>
                            <li className={styles.techList}> SQL 2018: - 2022 </li>
                    </ul>
                    </SectionText>
                </div>
                <div>
                     <h3>Technologies</h3>
                    <SectionText>
                        <ul>
                            <li className={styles.techList}> Flutter:  2019 - 2022 </li>
                            <li className={styles.techList}> React:  2020 - 2022 </li>
                            <li className={styles.techList}> Next.js:  2020 - 2022 </li>
                            <li className={styles.techList}> Node.js:  20201- 2022 </li>
                            <li className={styles.techList}> FastApi:  20201- 2022 </li>
                            <li className={styles.techList}> Pandas:  20201- 2022 </li>
                            <li className={styles.techList}> Matplotlib:  20201- 2022 </li>
                            {/* <li className={styles.techList}> TensorFlow:  20201- 2022 </li> */}
                            <li className={styles.techList}> Github </li>
                    </ul>
                    </SectionText>
                </div> 
                <div>
                 <h3>Databases</h3>
                    <SectionText>
                        <ul>
                            <li className={styles.techList}>Firebase:  2019 - 2022 </li>
                            <li className={styles.techList}> MongoDB:  2020 - 2022 </li>
                            <li className={styles.techList}> MySql:  2018 - 2022 </li>
                            
                    </ul>
                    </SectionText>    
                </div>
               
                 <div>
                 <h3>Other Skills</h3>
                    <SectionText>
                        <ul>
                            <li className={styles.techList}>Photoshop:  2015 - 2022 </li>
                            <li className={styles.techList}> Illustrator:  2015 - 2022 </li>
                            <li className={styles.techList}> Indesign:  2015 - 2022 </li>
                            
                    </ul>
                    </SectionText>    
                </div>
                 <div>
                 <h3>Currently Learning</h3>
                    <SectionText>
                        <ul>
                            <li className={styles.techList}>Aurduino </li>
                            <li className={styles.techList}>Blockchain - Solidity</li>
                            
                    </ul>
                    </SectionText>    
                </div>

            </div>
        </div>
    )
}
