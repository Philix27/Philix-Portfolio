"use client";
import React from "react";
import { styled } from "styled-components";
import { usePathname, useRouter } from "next/navigation";
import { AppLinks } from "../../lib/utils";

export default function AppNav() {
  const router = useRouter();

  const _path = usePathname();

  return (
    <Wrapper>
      <InnerWrapper>
        <NavItem
          isActive={_path === AppLinks.home}
          onClick={() => router.push(AppLinks.home)}
        >
          <p>Series</p>
        </NavItem>
        <NavItem
          isActive={_path === AppLinks.blogs}
          onClick={() => router.push(AppLinks.blogs)}
        >
          <p>Blog Posts</p>
        </NavItem>
        <NavItem
          isActive={_path === AppLinks.projects}
          onClick={() => router.push(AppLinks.projects)}
        >
          <p>Projects</p>
        </NavItem>
        <NavItem
          isActive={_path === AppLinks.about}
          onClick={() => router.push(AppLinks.about)}
        >
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

const NavItem = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  justify-content: center;
  height: 100%;
  border-right: solid 0.01px #9c9c9c;
  background-color: ${(props) => (props.isActive ? "red" : "#1a0e0e")};
  &:hover {
    background-color: red;
  }
`;
