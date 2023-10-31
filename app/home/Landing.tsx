import { BannerImg, BannerSubtitle, BannerTitle } from "../comps/Texts";

import styled from "styled-components";
import { device } from "../lib/styles/screensize";

export const PlainLanding = (props: {
  title: string;
  subtitle: string;
  imageUrl: string;
}) => {
  return (
    <Container>
      <Content>
        <BannerTitle>{props.title}</BannerTitle>
        <BannerSubtitle>{props.subtitle}</BannerSubtitle>
      </Content>
      <div>
        <BannerImg src={props.imageUrl} alt="hero_img" />
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  padding: 0 100px;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  background-size: cover;
  background-position: center;
  position: relative;
  background: rgb(2, 32, 69, 1);
  background: linear-gradient(
    180deg,
    rgba(2, 32, 69, 1) 0%,
    rgba(2, 19, 98, 1) 60%,
    rgba(3, 3, 121, 1) 100%
  );

  @media ${device.mobileL} {
    flex-direction: row;
    color: #00ff00;
    background-color: #fefefe;
  }
`;

const Content = styled.div`
  align-items: center;
  justify-content: center;
`;
