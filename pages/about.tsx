import fs from "fs";
import path from "path";
import AboutsView from "src/views/about";
import { AppWrapper } from "src/comps/wrapper/wrapper";
import matter from "gray-matter";

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
    path.join("_primary", "skills" + ".md"),
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
