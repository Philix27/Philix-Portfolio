import { useRouter } from "next/router";
import { TextBody, TextHeader } from "comps";
import {
  Wrapper,
  ContentWrapper,
  Card,
  Img,
  FirstContent,
  SecondContent,
} from "./comps";

import { AiOutlineClockCircle } from "react-icons/ai";
interface PropTypes {
  slug: string;
  frontmatter: {
    [key: string]: string;
  };
}

export default function BlogComp(props: {
  category: string;
  title: string;
  collection: Array<PropTypes>;
}) {
  const sortedItems = props.collection.filter((item) => {
    return item.frontmatter["category"] == props.category;
  });

  const router = useRouter();

  return (
    <Wrapper>
      <ContentWrapper>
        {props.collection.map(({ slug, frontmatter }, index) => (
          <Card key={index} onClick={() => router.push(`/blogs/${slug}`)}>
            <FirstContent>
              <div>
                <TextHeader variant="five">{frontmatter["title"]}</TextHeader>
                <SecondContent>
                  <AiOutlineClockCircle />
                  <TextBody variant="four">{frontmatter["date"]}</TextBody>
                </SecondContent>
                <TextBody variant="four">{frontmatter["subtitle"]}</TextBody>
              </div>
            </FirstContent>
            <Img src={frontmatter["cover_image"]} alt="cover" />
          </Card>
        ))}
      </ContentWrapper>
    </Wrapper>
  );
}
