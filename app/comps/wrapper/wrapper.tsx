"use client";
import React, { ReactNode } from "react";
import styled from "styled-components";
import AppNav from "../global/nav";
import TopTitles from "../global/topTile";
import Footer from "../global/footer";

export function AppWrapper(props: {
  children: ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <Container>
      <Inner>
        <TopTitles title={props.title} subtitle={props.subtitle} />
        <AppNav />
        <Content>{props.children}</Content>
        <Footer />
      </Inner>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e0e7ea;
`;
const Inner = styled.div`
  width: 75%;
  min-height: 100vh;
  background-color: white;
  margin: 40px;
  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px; */
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;
const Content = styled.div`
  min-height: 100vh;
`;
