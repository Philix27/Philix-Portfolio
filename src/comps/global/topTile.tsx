import React from "react";
import { styled } from "styled-components";

export default function TopTitles(props: { title: string; subtitle: string }) {
  return (
    <Wrapper>
      <h1>{props.title}</h1>
      <hr />
      <p>{props.subtitle}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 30px;

  h1 {
    font-weight: 700;
    padding-bottom: 10px;
  }
  hr {
    border: solid 0.1px #a7a7a7;
    margin-bottom: 10px;
  }
  p {
    color: #ff2f00;
    font-weight: 600;
  }
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
`;
