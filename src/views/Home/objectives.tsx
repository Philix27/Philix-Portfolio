import React from "react";
import { styled } from "styled-components";

export default function Objectives() {
  return (
    <Wrapper>
      <h1>Objectives</h1>
      <hr />
      <p>I am a dedicated developer who aims at making my community and the</p>
      <Contents>
        <div>
          I am a dedicated developer who aims at making my community and the
          world a better place through the use of Technology.
        </div>
        <div>
          <div>An open minded individual and a Life Long Learner</div>
        </div>
      </Contents>
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
    border: solid 0.1px #A7A7A7;
    margin-bottom: 10px;
  }
  p {
    padding-bottom: 20px;
    color: #FF2F00;
    font-weight: 600;
  }
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
`;
