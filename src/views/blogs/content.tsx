import { useRouter } from "next/router";
import { TextBody, TextHeader } from "comps";
import { styled } from "styled-components";

interface PropTypes {
  slug: string;
  frontmatter: {
    [key: string]: string;
  };
}

export default function BlogContentsView(props: {
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
      <TextHeader variant="two">{props.title}</TextHeader>
      <div>
        <GridWrapper>
          {sortedItems.map(({ slug, frontmatter }, index) => (
            <Card key={index} onClick={() => router.push(`/projects/${slug}`)}>
              <Img src={frontmatter["cover_image"]} />
              <div style={{ padding: "20px" }}>
                <TextHeader variant="five">{frontmatter["title"]}</TextHeader>
                <TextBody variant="four">{frontmatter["summary"]}</TextBody>
              </div>
            </Card>
          ))}
        </GridWrapper>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column; */
  /* align-items: center;
  justify-content: center; */
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
