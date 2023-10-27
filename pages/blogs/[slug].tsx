import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";
import { AppWrapper } from "src/comps/wrapper/wrapper";
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
        <img src={cover_image} alt="" className="img" />
        <div className="markdown-section">
          <div dangerouslySetInnerHTML={{ __html: cc }}></div>
        </div>
      </div>
    </AppWrapper>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("_primary"));

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
    path.join("_primary", slug + ".md"),
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
