import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogComp from "../../src/views/blogs";
import { sortByDate } from "../../utils";
import { PlainLanding } from "../../src/comps/Landing";

export default function PostPage({ posts }) {
  const _category = ["All", "Africa", "Think", "Productivity"];
  return (
    <div>
      <PlainLanding
        title={"Blogs"}
        subtitle={"Study time"}
        imageUrl={"/images/tech.png"}
      />
      <BlogComp
        title="Blogs and Articles"
        page="blogs"
        categoryList={_category}
        posts={posts}
      />
    </div>
  );
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("_go"));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("_go", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
