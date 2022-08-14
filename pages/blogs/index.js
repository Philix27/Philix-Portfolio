import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
// import Head from 'next/head'
import BlogComp from '../../comps/blogs'
import { sortByDate } from '../../utils'

export default function PostPage({ posts }) {
   const _category = ["All", "Africa", "Think", "Productivity"];
  return (
    <div>
      {/* <Head>
        <title>Blog Categories</title>
      </Head> */}
      <BlogComp
        title='Blogs and Articles'
        page='blogs'
         categoryList={_category}
        posts={posts}/>
    </div>
  )
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('_posts'))

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('_posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}
