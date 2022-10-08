import ProjectsGroup from "../../comps/projects/allProjectsList";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../../utils";

export default function ProjectsPage({ projects }) {
  return (
    <>
      <div className="section">
        <h1 className="sectionTitle">Flutter UI</h1>
      </div>
      <ProjectsGroup category="fui" projectCol={projects} />
      <div className="section">
        <h1 className="sectionTitle">Mobile Apps</h1>
      </div>
      <ProjectsGroup category="mobile" projectCol={projects} />
      <div className="section">
        <h1 className="sectionTitle">Web Apps</h1>
      </div>
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
