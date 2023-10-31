"use client";
import ClientOnly from "../comps/CleintOnly";
import { AppWrapper } from "../comps/wrapper/wrapper";
import ProjectsList from "./grid";

interface PropTypes {
  slug: string;
  frontmatter: {
    [key: string]: string;
  };
}
export default function ProjectsPage() {
  return (
    <ClientOnly>
      <AppWrapper
        title={"Projects"}
        subtitle={"List of personal projects over the years"}
      >
        <ProjectsList />
      </AppWrapper>
    </ClientOnly>
  );
}
