import { Wrapper, ContentWrapper } from "@/(pages)/blogs/comps";
import React from "react";
import { styled } from "styled-components";

export function HomeView() {
  return (
    <ContentWrapper>
      <ListItem>
        <h4>Title</h4>
        <p>Title</p>
      </ListItem>
    </ContentWrapper>
  );
}

const ListItem = styled.div`
  width: 100%;
  padding: 5px 10px;
  background-color: #bbb;
  border-bottom: solid 1px gray;

  h4 {
  }
  p {
    color: gray;
    font-weight: 300;
  }
`;
