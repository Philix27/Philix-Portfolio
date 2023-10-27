import React from "react";
import TechList from "../../comps/techlist";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";
import { styled } from "styled-components";

export default function TechSection(props: { content }) {
  const md = new MarkdownIt();
  const cc = md.render(props.content);
  return (
    <Wrapper>
      <div dangerouslySetInnerHTML={{ __html: cc }}></div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* background-color: orangered; */
  width: 100%;
  ul {
    margin-bottom: 20px;
    margin-left: 30px;
    li {
      list-style: square;
      font-weight: 300;
    }
  }
  h2 {
    padding-bottom: 10px;
  }
  div{

  }
`;
