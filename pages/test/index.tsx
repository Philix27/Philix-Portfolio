import { AppWrapper } from "comps/wrapper/wrapper";
import { MarkdownStyledComp } from "comps/markdown";
import MadFile from "../../docs/blogs/kolab.mdx";

export default function PostContentPage() {
  return (
    <AppWrapper title={"Blog Item"} subtitle={"Blogs"}>
      <MarkdownStyledComp>
        <MadFile />
      </MarkdownStyledComp>
    </AppWrapper>
  );
}
