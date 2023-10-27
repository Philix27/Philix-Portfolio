import fs from "fs";
import path from "path";
import AboutsView from "views/about";
import { AppWrapper } from "comps";
import matter from "gray-matter";
import { AppPaths } from "utils";

export default function AboutUsPage(props: {
  frontmatter: any;
  content: string;
}) {
  return (
    <AppWrapper title={"About up page"} subtitle={"More info about Felix"}>
      <AboutsView content={props.content} />
    </AppWrapper>
  );
}

export async function getStaticProps() {
  const markdownWithMeta = fs.readFileSync(
    path.join(AppPaths.contents.resume, "skills" + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      content,
    },
  };
}
