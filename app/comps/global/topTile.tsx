import { TextBody, TextHeader } from "../text";
import React from "react";
import { styled } from "styled-components";

export default function TopTitles(props: { title: string; subtitle: string }) {
  return (
    <Wrapper>
      <TextHeader variant="one">{props.title}</TextHeader>
      <hr />
      <TextBody variant="three">{props.subtitle}</TextBody>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 30px;
  hr {
    border: solid 0.1px #a7a7a7;
    margin-bottom: 10px;
  }
  p {
    color: #ff2f00;
    font-weight: 600;
  }
`;
