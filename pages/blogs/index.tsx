import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogComp from "views/blogs";
import { sortByDate } from "utils/sort";
import { AppWrapper } from "comps/wrapper/wrapper";
import { MetaHeader } from "comps/global/meta";
import { AppPaths } from "utils";

interface PropTypes {
  slug: string;
  frontmatter: {
    [key: string]: string;
  };
}

export default function PostPage(props: { posts: Array<PropTypes> }) {
  return (
    <AppWrapper title={"Blogs and Articles"} subtitle={"Blogs"}>
      <MetaHeader title={"Blogs | Felix Eligbue"} />
      <BlogComp category="mobile" title={"All"} collection={props.posts} />
    </AppWrapper>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join(AppPaths.contents.blogs));
  const articles = files.map((filename) => {
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
      posts: articles.sort(sortByDate),
    },
  };
}
