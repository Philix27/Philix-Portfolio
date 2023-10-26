import ProjectsGroup from "../../src/views/projects/project_group";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../../src/utils/sort";
import { Landing } from "../../src/views/home/Landing2";
import AppWrapper from "src/comps/wrapper/wrapper";

export default function ProjectsPage({ projects }) {
  return (
    <AppWrapper
      title={"Projects"}
      subtitle={"List of personal projects over the years"}
    >
      <div>
        <h1>Mobile Apps</h1>
      </div>
      <ProjectsGroup category="mobile" projectCol={projects} />
      <div>
        <h1>Web Apps</h1>
      </div>
      <ProjectsGroup category="web" projectCol={projects} />
    </AppWrapper>
  );
}

export async function getStaticProps() {
  // Get files from the projects dir
  const files = fs.readdirSync(path.join("_projects"));
  // Get slug and frontmatter from projects
  const books = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("_projects", filename),
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
