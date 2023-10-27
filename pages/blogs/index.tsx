import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogComp from "views/blogs";
import { sortByDate } from "utils/sort";
import { AppWrapper } from "comps/wrapper/wrapper";
import { AppPaths } from "utils";

export default function PostPage({ posts }) {
  const _category = ["All", "Africa", "Think", "Productivity"];
  return (
    <AppWrapper title={"Blogs and Articles"} subtitle={"Blogs"}>
      <BlogComp
        title="Blogs and Articles"
        page="blogs"
        categoryList={_category}
        posts={posts}
      />
    </AppWrapper>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join(AppPaths.contents.blogs));
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join(AppPaths.contents.blogs, filename),
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
