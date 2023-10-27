import React, { ReactNode } from "react";
import { styled } from "styled-components";

type Variants = "one" | "two" | "three" | "four" | "five" | "six";
export function TextHeader(props: { variant: Variants; children: ReactNode }) {
  switch (props.variant) {
    case "one":
      return <HeaderText1>{props.children}</HeaderText1>;
    case "two":
      return <HeaderText2>{props.children}</HeaderText2>;
    case "three":
      return <HeaderText3>{props.children}</HeaderText3>;
    case "four":
      return <HeaderText4>{props.children}</HeaderText4>;
    case "five":
      return <HeaderText5>{props.children}</HeaderText5>;
    case "six":
      return <HeaderText5>{props.children}</HeaderText5>;
    default:
      return <HeaderText6>{props.children}</HeaderText6>;
  }
}

const HeaderText1 = styled.h1`
  font-size: 32px;
  font-weight: 900;
`;
const HeaderText2 = styled.h2`
  font-size: 28px;
  font-weight: 800;
`;
const HeaderText3 = styled.h3`
  font-size: 24px;
  font-weight: 700;
`;
const HeaderText4 = styled.h4`
  font-size: 20px;
  font-weight: 600;
`;
const HeaderText5 = styled.h5`
  font-size: 16px;
  font-weight: 600;
`;
const HeaderText6 = styled.h6`
  font-size: 14px;
  font-weight: 600;
`;
