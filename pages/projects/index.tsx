import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "utils/sort";
import { AppWrapper } from "comps/wrapper/wrapper";
import { AppPaths } from "utils";
import ProjectsGroup from "views/projects/project_group";

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
      <ProjectsGroup />
    </AppWrapper>
  );
}
