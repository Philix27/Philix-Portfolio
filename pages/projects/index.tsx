import { AppWrapper } from "comps/wrapper/wrapper";
import ProjectsList from "views/projects";

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
      {/* <ProjectsList /> */}
    </AppWrapper>
  );
}
