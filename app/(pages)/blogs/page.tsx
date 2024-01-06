"use client";
import { AppWrapper, ClientOnly, MetaHeader } from "@/comps";
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
