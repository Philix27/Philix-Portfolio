import React from "react";
import { styled } from "styled-components";
import { useRouter } from "next/router";
import { AppLinks } from "utils";

export default function AppNav() {
  const router = useRouter();
  const _path = router.pathname;
  // <li
  //   className={
  //     _path == "/projects/web"
  //       ? styles.active_list_item
  //       : styles.nav_start_list_item
  //   }
  // ></li>;
  return (
    <Wrapper>
      <InnerWrapper>
        <NavItem onClick={() => router.push(AppLinks.home)}>
          <p>Home</p>
        </NavItem>
        <NavItem onClick={() => router.push(AppLinks.blogs)}>
          <p>Blog Posts</p>
        </NavItem>
        <NavItem onClick={() => router.push(AppLinks.projects)}>
          <p>Projects</p>
        </NavItem>
        <NavItem onClick={() => router.push(AppLinks.about)}>
          <p>About</p>
        </NavItem>
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
`;
const InnerWrapper = styled.div`
  display: flex;
  height: 100%;
`;
const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  justify-content: center;
  height: 100%;
  border-right: solid 0.01px #9c9c9c;

  &:hover {
    background-color: red;
  }
`;
