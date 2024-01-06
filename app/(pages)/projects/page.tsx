"use client";
import { ClientOnly, AppWrapper } from "@/comps";
import ProjectsList from "./grid";

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
