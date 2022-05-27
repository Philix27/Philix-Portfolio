  import Link from 'next/link'
  import React from 'react'
  import {motion} from 'framer-motion'


 export default function BlogComp({ posts, title, page })  {
      return (
        <div className='section postsSection' id="services">
          <div className='sectionTitle' >{title}</div >        
          <div className='gridContainer'>
        {posts.map((post, index) => (
          <motion.div
            key={index}
            className='card'
            initial={{ x: "-100vw", opacity: 0.1 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{duration: 1.7, delay: 1, type: "spring", stiffness:"110"}}> 
            {/* transition={{duration: 1.7, delay: 1, type: "tween", }}> */}
            {/* <Image src={image} width={500} height={300}/> */}
            <Link href={`/${page}/${post.slug}`} target="_blank">
              <img className='img' src={post.frontmatter.cover_image} />
            </Link>
          {/* <BlogCard> */}
            <h3 className='headerThree'>{post.frontmatter.title}</h3>
            
            <div >
              <div className='sectionText'>
                {post.frontmatter.excerpt}
              </div>
              <hr />
              <div className='sectionText'>
                Posted on {post.frontmatter.date}
              </div>
          </div>
        
         {/* </BlogCard> */}
         </motion.div>
        ))}
      </div>
            
          </div>
          //  </div>
      )
  }
