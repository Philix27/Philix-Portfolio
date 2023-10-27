import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";
import { Landing } from "views/projects/banner";
import { AppWrapper } from "comps/wrapper/wrapper";
import { AppPaths } from "utils";

export default function ProjectContentPage({
  frontmatter: { title, cover_image, date },
  slug,
  content,
}) {
  const md = new MarkdownIt();
  const cc = md.render(content);

  return (
    <AppWrapper title={title} subtitle={date}>
      <Landing
        title={title}
        imgUrl={cover_image}
        subtitle="Web projects"
        opacity={undefined}
      />
      <div className="section post_page">
        <div className="markdown-section">
          <div dangerouslySetInnerHTML={{ __html: cc }}></div>
        </div>
      </div>
    </AppWrapper>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join(AppPaths.contents.projects));

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
    path.join(AppPaths.contents.projects, slug + ".md"),
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
