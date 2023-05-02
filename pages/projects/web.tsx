import ProjectsGroup from "../../src/views/projects";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../../utils";
import { Landing } from "../../src/views/globalComps/Landing";

export default function ProjectsPage({ projects }) {
  return (
    <>
      <Landing
        title="Web Applications"
        imgUrl="../images/web.jpg"
        subtitle="Web projects"
        opacity={undefined}
      />
      <ProjectsGroup category="web" projectCol={projects} />
    </>
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
