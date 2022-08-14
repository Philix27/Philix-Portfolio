import React from 'react'
import styles from './About.module.css'


export default function About() {

    return (
        <div className='section' id="about">
            <h1 className='sectionTitle'>About</h1>
             <br/>
            <br/>
            <div className={styles.content}>
                <div className={styles.ceo}>
                    {/* <Image src="/pp.jpg" width={500} height={500}/> */}
                <img className={styles.img} src="/pp.jpg" alt="Eligbue Felix"/>
                </div>
                <div className={styles.education}>
                    <h3>Education</h3>
                    <div className='sectionText'>
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
                    </div>      
                </div>
            </div>
             <br/>
            {/* <br/> */}
            <h1 className='sectionTitle'>Technologies</h1>
             <br/>
            <div className={styles.content}>
                <div>
                    <h3>Programming Languages</h3>
                    <div className='sectionText'>
                        <ul >
                            <li className={styles.techList}> Dart: 2019: - 2022 </li>
                            <li className={styles.techList}> Javascript: 2020 - 2022 </li>
                            <li className={styles.techList}> Python: 2021 - 2022 </li>
                            <li className={styles.techList}> Solidity: 2021 - 2022 </li>
                            <li className={styles.techList}> SQL 2018: - 2022 </li>
                    </ul>
                    </div>
                </div>
                <div>
                     <h3>Technologies</h3>
                    <div className='sectionText'>
                        <ul>
                            <li className={styles.techList}> Flutter:  2019 - 2022 </li>
                            <li className={styles.techList}> React:  2020 - 2022 </li>
                            <li className={styles.techList}> Next.js:  2020 - 2022 </li>
                            <li className={styles.techList}> Node.js:  20201- 2022 </li>
                            <li className={styles.techList}> FastApi:  20201- 2022 </li>
                            <li className={styles.techList}> Pandas:  20201- 2022 </li>
                            <li className={styles.techList}> Matplotlib:  20201- 2022 </li>
                            <li className={styles.techList}> Github </li>
                    </ul>
                    </div>
                </div> 
                <div>
                     <h3>CSS Technologies</h3>
                    <div className='sectionText'>
                        <ul>
                            <li className={styles.techList}> Styled Components </li>
                            <li className={styles.techList}> SASS - Preferred Choice</li>
                            <li className={styles.techList}> Bootstrap </li>
                            <li className={styles.techList}> CSS modules </li>
                    </ul>
                    </div>
                </div> 
                <div>
                     <h3>Backend Technologies</h3>
                    <div className='sectionText'>
                        <ul>
                            <li className={styles.techList}> Heroku </li>
                            <li className={styles.techList}> Vercel - Preferred Choice</li>
                            <li className={styles.techList}> Strapi - CMS</li>
                    </ul>
                    </div>
                </div> 
                <div>
                     <h3>Cloud Technologies</h3>
                    <div className='sectionText'>
                        <ul>
                            <li className={styles.techList}>Docker </li>
                            <li className={styles.techList}> Kubernates</li>
                            <li className={styles.techList}> GCP</li>
                    </ul>
                    </div>
                </div> 
               
                <div>
                 <h3>Databases</h3>
                    <div className='sectionText'>
                        <ul>
                            <li className={styles.techList}>Firebase:  2019 - 2022 </li>
                            <li className={styles.techList}> MongoDB:  2020 - 2022 </li>
                            <li className={styles.techList}> MySql:  2018 - 2022 </li>
                            <li className={styles.techList}> Sqflite </li>
                            <li className={styles.techList}> Postgres </li>
                            {/* <li className={styles.techList}> Sanity: 2022 </li> */}
                            
                    </ul>
                    </div>    
                </div>
               
                 <div>
                 <h3>Other Skills</h3>
                    <div className='sectionText'>
                        <ul>
                            <li className={styles.techList}>Photoshop:  2015 - 2022 </li>
                            <li className={styles.techList}> Illustrator:  2015 - 2022 </li>
                            <li className={styles.techList}> Indesign:  2015 - 2022 </li>
                            
                    </ul>
                    </div>    
                </div>
            </div>
           
             <h1 className='sectionTitle'>Graphics</h1>
             <br/>
            <div className={styles.content}>
                <div>
                 <h3>2D Graphics</h3>
                    <div className='sectionText'>
                        <ul>
                             <li className={styles.techList}>Photoshop:  2015 - 2022 </li>
                            <li className={styles.techList}> Illustrator:  2015 - 2022 </li>
                            <li className={styles.techList}> Indesign:  2015 - 2022 </li>
                    </ul>
                    </div>    
                </div> 
                
                <div>
                 <h3>Motion Graphics</h3>
                    <div className='sectionText'>
                        <ul>
                             <li className={styles.techList}>Premier Pro </li>
                            <li className={styles.techList}>After Effects </li>
                    </ul>
                    </div>    
                </div> 
            </div>
        </div>
    )
}
