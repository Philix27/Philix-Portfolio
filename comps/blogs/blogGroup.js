import React from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'
import styles from './projects.module.css'
import { blogs } from './constants';


export default function BlogGroup() {
  
    return (
      <div className='section'>
             <div className={styles.gridContainer}>
            {
    blogs.map(({title, image, id,}) => (
     
        <motion.div
          key={id}
          className={styles.card}
          initial={{ x: "-100vw", opacity: 0.1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{duration: 1.7, delay: 1, type: "tween", }}>
          {/* transition={{duration: 1.7, delay: 1, type: "spring", stiffness:"110"}}> */}
          {/* <Image src={image} width={500} height={300}/> */}
        
           {/* <Link href=`/project/1${id}`><a><Img src={image} /> </a></Link> */}
           <Link href=''><a><img className={styles.img} src={image} /> </a></Link>
        
        <div className={styles.titleContent} >
          <div className={styles.headerThree} >{title}</div>
        </div  >
         
       
       </motion.div>
      ))}
    </div>
           
          
      </div>
    )
}
