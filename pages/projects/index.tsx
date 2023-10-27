import ProjectsGroup from "../../src/views/projects/project_group";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "utils/sort";
import { AppWrapper } from "comps/wrapper/wrapper";
import { AppPaths } from "utils";
import { TextHeader } from "comps";

interface PropTypes {
  slug: string;
  frontmatter: {
    [key: string]: string;
  };
}
export default function ProjectsPage(props: { projects: Array<PropTypes> }) {
  return (
    <AppWrapper
      title={"Projects"}
      subtitle={"List of personal projects over the years"}
    >
      <ProjectsGroup
        category="mobile"
        title={"Mobile Apps"}
        collection={props.projects}
      />
      <ProjectsGroup
        title={"Web Apps"}
        category="web"
        collection={props.projects}
      />
    </AppWrapper>
  );
}

export async function getStaticProps() {
  // Get files from the projects dir
  const files = fs.readdirSync(path.join(AppPaths.contents.projects));
  // Get slug and frontmatter from projects
  const books = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join(AppPaths.contents.projects, filename),
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
      projects: books.sort(sortByDate),
    },
  };
}
