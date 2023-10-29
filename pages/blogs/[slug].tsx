import { AppWrapper } from "comps/wrapper/wrapper";
import { AppPaths } from "utils";
import { Landing } from "views/projects/banner";
import { MarkdownStyledComp } from "comps/markdown";
import { AppBlogs } from "../../docs";

export default function PostContentPage({ slug }) {
  const activeContent = AppBlogs.filter((v, index) => v.id === slug)[0];
  return (
    <AppWrapper title={activeContent.title} subtitle={activeContent.subtitle}>
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
  const paths = AppBlogs.map((val, index) => ({
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
