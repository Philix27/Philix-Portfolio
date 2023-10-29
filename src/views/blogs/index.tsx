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
import { AppBlogs } from "../../../docs";

export default function BlogComp() {
  const sortedItems = AppBlogs.filter((item) => {
    return item.category == "rust";
  });

  const router = useRouter();

  return (
    <Wrapper>
      <ContentWrapper>
        {AppBlogs.map((item, index) => (
          <Card
            key={index}
            onClick={() => router.push(`/blogs/${item.id}`)}
          >
            <FirstContent>
              <div>
                <TextHeader variant="five">{item.title}</TextHeader>
                <SecondContent>
                  <AiOutlineClockCircle />
                  <TextBody variant="four">{item.start_date}</TextBody>
                </SecondContent>
                <TextBody variant="four">{item.subtitle}</TextBody>
              </div>
            </FirstContent>
            <Img src={item.cover_image} alt="cover" />
          </Card>
        ))}
      </ContentWrapper>
    </Wrapper>
  );
}
