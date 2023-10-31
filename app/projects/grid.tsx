import { useRouter } from "next/navigation";
import { TextBody, TextHeader } from "../comps/text";
import { styled } from "styled-components";
import { AppProjects } from "../lib/docs/projects";
import Link from "next/link";
import { AppLinks } from "@/lib/utils";

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
          <InLink
            passHref={false}
            href={`${AppLinks.projects}/${val.id}`}
            key={index}
          >
            <Img src={val.cover_image} />
            <div style={{ padding: "20px" }}>
              <TextHeader variant="five">{val.title}</TextHeader>
              <TextBody variant="four">{val.subtitle}</TextBody>
            </div>
          </InLink>
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
const InLink = styled(Link)`
  background-color: #fff;
  color: #490000;
  display: block;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  text-align: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

// const Card = styled.div`
//   /* padding: 20px; */
//   border-radius: 10px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-items: center;
//   text-align: center;
//   box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
//   cursor: pointer;
// `;
const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 3rem;
  column-gap: 3rem;
  row-gap: 3rem;
`;
