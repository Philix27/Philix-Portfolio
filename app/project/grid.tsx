"use client"
import { useRouter } from "next/router";
import { TextBody, TextHeader } from "../comps";
import { styled } from "styled-components";
import { AppProjects } from "../lib/docs/projects";

interface PropTypes {
  slug: string;
  frontmatter: {
    [key: string]: string;
  };
}

export default function ProjectsList() {
  const sortedItems = AppProjects.filter((item) => {
    return item.category == "web";
  });

  const router = useRouter();

  return (
    <Wrapper>
      <GridWrapper>
        {AppProjects.map((val, index) => (
          <Card key={index}>
            <Img src={val.cover_image} />
            <div style={{ padding: "20px" }}>
              <TextHeader variant="five">{val.title}</TextHeader>
              <TextBody variant="four">{val.subtitle}</TextBody>
            </div>
          </Card>
        ))}
      </GridWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  padding-top: 20px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  // visibility: hidden;
  object-fit: cover;
  overflow: hidden;
`;
const Card = styled.div`
  background-color: #fff;
  /* padding: 20px; */
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  text-align: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;
const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 3rem;
  column-gap: 3rem;
  row-gap: 3rem;
`;
