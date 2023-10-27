import { TextBody } from "comps/text";
import React from "react";
import { styled } from "styled-components";

export default function Footer() {
  return (
    <Wrapper>
      <InnerWrapper>
        <TextBody variant="four">
          © 2023 Copyright &copy; All Rights Reserved.
        </TextBody>
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 50px;
  width: 100%;
  background-color: #1a0e0e;
  color: white;
  border-bottom: solid 5px red;
  padding: 10px;
`;

const InnerWrapper = styled.div`
  display: flex;
  height: 100%;
align-items: center;
justify-content: center;
`;
