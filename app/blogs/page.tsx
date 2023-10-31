"use client"
import { AppWrapper } from "../comps/wrapper/wrapper";
import { MetaHeader } from "../comps/global/meta";

import ClientOnly from "../comps/CleintOnly";
import BlogComp from ".";

interface PropTypes {
  slug: string;
  frontmatter: {
    [key: string]: string;
  };
}

export default function BlogsPage() {
  return (
    <ClientOnly>
      <AppWrapper title={"Blogs and Articles"} subtitle={"Blogs"}>
        <MetaHeader title={"Blogs | Felix Eligbue"} />
        <BlogComp />
      </AppWrapper>
    </ClientOnly>
  );
}
