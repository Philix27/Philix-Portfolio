import React, { ReactNode } from "react";
import { styled } from "styled-components";

type Variants = "one" | "two" | "three" | "four" | "five";
export default function TextBody(props: {
  variant: Variants;
  children: ReactNode;
}) {
    
  return <BodyText1>{props.children}</BodyText1>;
}

const BodyText1 = styled.p`
  font-size: 18px;
  font-weight: 600;
`;
