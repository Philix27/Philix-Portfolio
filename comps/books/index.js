  import Link from 'next/link'
  import {useState} from 'react' 
  import {motion} from 'framer-motion'


export default function BooksComp({ posts, title, page, categoryList, }) {
    const [selectedCategory, setSelectedCategory] = useState(posts);

  const changeToCateory = (_category) => {
    const tempList = [];
    posts.forEach(post => {
        
      if (_category == "All") { 
        tempList = posts;
      } else if (post.frontmatter.category == _category) {
          tempList.push(post)
        }
      });
      setSelectedCategory(tempList);
  }
  
      return (
        <div className='section booksListPage' id="books">
          <div className='sectionTitle' >{title}</div >
          <div className='categoryContainer'>
            {categoryList.map((cat, index) => (
              <div className='categories' onClick={() => changeToCateory(cat)}>
                {cat}
              </div>
            ))}

          </div>
          {/* //! Consider designing a dropdown select option especially for mobile view */}
          <div className='gridContainer'>
        {selectedCategory.map((post, index) => (
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
            
            <div className='texty'>

              <h3 className='bookTitle'>{index + 1}. {post.frontmatter.title}</h3>
              
              <div className='bookAuthor'>
                {post.frontmatter.excerpt}
              </div>

              <div className='bookPostedDate'>
                Posted on {post.frontmatter.date}
              </div>
            </div>
         </motion.div>
        ))}
      </div>
            
          </div>
          //  </div>
      )
  }
