"use client";

import { AppWrapper } from "@/comps";
import React from "react";
import { styled } from "styled-components";
import { ContentWrapper } from "../oblogs/comps";

export function HomeView() {
  return (
    <AppWrapper title={"Articles"} subtitle={"Series of all articles"}>
      <ContentWrapper>
        <ListItem>
          {/* <h4>Title</h4> */}
          {/* <p>Title</p> */}
        </ListItem>
      </ContentWrapper>
    </AppWrapper>
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
