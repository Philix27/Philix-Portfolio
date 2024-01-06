import { AppWrapper, ClientOnly, MetaHeader } from "@/comps";
import BlogComp from "./client";
import { Metadata } from "next";

export default function BlogsPage() {
  return (
    <ClientOnly>
      <BlogComp />
    </ClientOnly>
  );
}

export const metadata: Metadata = {
  title: "Eligbue Felix",
  description: "Blogs",
};
