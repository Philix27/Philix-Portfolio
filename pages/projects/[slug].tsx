import { AppWrapper } from "comps/wrapper/wrapper";
import { Landing } from "views/projects/banner";
import { MarkdownStyledComp } from "comps/markdown";
import { useRouter } from "next/router";
import { AppProjects } from "../../docs/projects";


export default function ProjectsContentPage() {
  const router = useRouter();
  const activeContent = AppProjects.filter(
    (v, index) => v.id === router.query.slug
  )[0];
  return (
    <AppWrapper title={"Topper"} subtitle={"Hello"}>
      {/* <Landing
        title={activeContent.title}
        imgUrl={activeContent.cover_image}
        subtitle={activeContent.subtitle}
        opacity={undefined}
      />
      <MarkdownStyledComp>{activeContent.comp}</MarkdownStyledComp> */}
    </AppWrapper>
  );
}
