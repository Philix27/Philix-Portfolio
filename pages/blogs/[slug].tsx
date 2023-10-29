import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";
import { AppWrapper } from "comps/wrapper/wrapper";
import { AppPaths } from "utils";
import { Landing } from "views/projects/banner";
import { MarkdownStyledComp } from "comps/markdown";

// import { AppWrapper } from "comps";

export default function PostContentPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
  const md = new MarkdownIt();
  const cc = md.render(content);

  return (
    <AppWrapper title={title} subtitle={"Blogs"}>
      <Landing
        title={title}
        imgUrl={cover_image}
        subtitle="Web projects"
        opacity={undefined}
      />
      <MarkdownStyledComp dangerouslySetInnerHTML={{ __html: cc }} />
    </AppWrapper>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join(AppPaths.contents.blogs));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join(AppPaths.contents.blogs, slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
