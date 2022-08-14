import styles from './Landing.module.css'

export const HomeLanding = () => {

    return (
      <div id='home' className={styles.container}> 
       <div className={styles.content}>
              <h1 className={styles.sectionTitle} >Hi, I'm Felix Eligbue</h1 >
           
          <p className={styles.smallText}>
            Full Stack Developer and a Pharmacist  
          </p> 
         
            <a href="/docs/res.pdf" download="philix_cv" >
            <div className='btn'>Resume</div>
          </a>
          
        </div>
      </div>
    )
}


