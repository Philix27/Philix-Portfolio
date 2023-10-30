import { Landing } from "views/projects/banner";
import { AppWrapper } from "comps/wrapper/wrapper";
import { MarkdownStyledComp } from "comps/markdown";
import { useRouter } from "next/router";
import { AppBlogs } from "../../docs";

export default function BlogContentPage() {
  const router = useRouter();
  const activeContent = AppBlogs.filter(
    (v, index) => v.id === router.query.slug
  )[0];
  return (
    <AppWrapper
      title={ "Topper"}
      subtitle={ "Hello"}
    >
      <Landing
        title={activeContent.title}
        imgUrl={activeContent.cover_image}
        subtitle={activeContent.subtitle}
        opacity={0.5}
      />
      <MarkdownStyledComp>{activeContent.comp}</MarkdownStyledComp>
    </AppWrapper>
  );
}
