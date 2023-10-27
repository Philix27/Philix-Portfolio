import { TextBody, TextHeader } from "comps";
import { styled } from "styled-components";

export const Landing = ({ imgUrl, title, subtitle, opacity }) => {
  return (
    <Wrapper
      id="home"
      style={{
        backgroundImage: `linear-gradient(rgba(31, 44, 90, 0.2), rgba(4, 9, 30, ${
          opacity ? opacity : 0.1
        })), url(${imgUrl})`,
      }}
    >
      <Content>
        <TextHeader variant="three">{title}</TextHeader>
        <TextBody variant="three">{subtitle}</TextBody>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 40vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: flex-start;
  background-size: cover;
  background-position: center;
  position: relative;
`;

const Content = styled.div`
  align-items: center;
  justify-content: center;
  padding-left: 50px;
  color: #fff;
`;
