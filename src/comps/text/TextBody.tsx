import React, { ReactNode } from "react";
import { styled } from "styled-components";

type Variants = "one" | "two" | "three" | "four" | "five" | "six";
export function TextBody(props: { variant: Variants; children: ReactNode }) {
  switch (props.variant) {
    case "one":
      return <BodyText1>{props.children}</BodyText1>;
    case "two":
      return <BodyText2>{props.children}</BodyText2>;
    case "three":
      return <BodyText3>{props.children}</BodyText3>;
    case "four":
      return <BodyText4>{props.children}</BodyText4>;
    case "five":
      return <BodyText5>{props.children}</BodyText5>;
    case "six":
      return <BodyText5>{props.children}</BodyText5>;
    default:
      return <BodyText6>{props.children}</BodyText6>;
  }
}

const BodyText1 = styled.p`
  font-size: 18px;
  font-weight: 600;
`;
const BodyText2 = styled.p`
  font-size: 16px;
  font-weight: 600;
`;
const BodyText3 = styled.p`
  font-size: 14px;
  font-weight: 500;
`;
const BodyText4 = styled.p`
  font-size: 12px;
  font-weight: 400;
`;
const BodyText5 = styled.p`
  font-size: 10px;
  font-weight: 400;
`;
const BodyText6 = styled.p`
  font-size: 8px;
  font-weight: 300;
`;
