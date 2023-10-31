import { AppWrapper } from "../src/comps/wrapper/wrapper";
import { MetaHeader } from "../src/comps/global/meta";
import BlogComp from "../src/views/blogs";

interface PropTypes {
  slug: string;
  frontmatter: {
    [key: string]: string;
  };
}

export default function BlogsPage() {
  return (
    <AppWrapper title={"Blogs and Articles"} subtitle={"Blogs"}>
      <MetaHeader title={"Blogs | Felix Eligbue"} />
      <BlogComp  />
    </AppWrapper>
  );
}
