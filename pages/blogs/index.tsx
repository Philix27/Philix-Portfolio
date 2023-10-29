import BlogComp from "views/blogs";
import { AppWrapper } from "comps/wrapper/wrapper";
import { MetaHeader } from "comps/global/meta";

interface PropTypes {
  slug: string;
  frontmatter: {
    [key: string]: string;
  };
}

export default function PostPage() {
  return (
    <AppWrapper title={"Blogs and Articles"} subtitle={"Blogs"}>
      <MetaHeader title={"Blogs | Felix Eligbue"} />
      <BlogComp  />
    </AppWrapper>
  );
}
