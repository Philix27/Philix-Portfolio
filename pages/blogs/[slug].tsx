import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";
import { AppWrapper } from "comps/wrapper/wrapper";
import { AppPaths } from "utils";
import { AppBlogs } from "../../docs";
import { sortByDate } from "utils/sort";

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
      <div className="section post_page">
        <div className="sectionText">Posted on {date}</div>
        <img src={cover_image} alt="" />
        <div className="markdown-section">
          <div dangerouslySetInnerHTML={{ __html: cc }}></div>
        </div>
      </div>
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
