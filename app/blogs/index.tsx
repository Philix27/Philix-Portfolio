"use client"
import { useRouter } from "next/navigation";
import {
  Wrapper,
  ContentWrapper,
  Card,
  Img,
  FirstContent,
  SecondContent,
} from "./comps";

import { AiOutlineClockCircle } from "react-icons/ai";
import { TextBody, TextHeader } from "../comps/text";
import { AppBlogs } from "@/lib/docs";

export default function BlogComp() {
  const router = useRouter();

  return (
    <Wrapper>
      <ContentWrapper>
        {AppBlogs.map((val, index) => (
          <Card key={index} onClick={() => router.push(`/blogs/${val.id}`)}>
            <FirstContent>
              <div>
                <TextHeader variant="five">{val.title}</TextHeader>
                <SecondContent>
                  <AiOutlineClockCircle />
                  <TextBody variant="four">{val.start_date}</TextBody>
                </SecondContent>
                <TextBody variant="four">{val.subtitle}</TextBody>
              </div>
            </FirstContent>
            <Img src={val.cover_image} alt="cover" />
          </Card>
        ))}
      </ContentWrapper>
    </Wrapper>
  );
}
