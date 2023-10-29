import MarkdownIt from "markdown-it";
import { Landing } from "views/projects/banner";
import { AppWrapper } from "comps/wrapper/wrapper";
import { MarkdownStyledComp } from "comps/markdown";
import { AppProjects } from "../../docs/projects";

export default function PostContentPage({ slug }) {
  const activeContent = AppProjects.filter((v, index) => v.id === slug)[0];

  return (
    <AppWrapper title={activeContent.title} subtitle={activeContent.start_date}>
      <Landing
        title={activeContent.title}
        imgUrl={activeContent.cover_image}
        subtitle={activeContent.subtitle}
        opacity={undefined}
      />
      <MarkdownStyledComp>{activeContent.comp}</MarkdownStyledComp>
    </AppWrapper>
  );
}

export async function getStaticPaths() {
  const paths = AppProjects.map((val, index) => ({
    params: {
      slug: val.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  return {
    props: {
      slug,
    },
  };
}
