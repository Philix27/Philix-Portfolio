import { TextBody } from "../text";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillPhone,
  AiFillTwitterSquare,
  AiOutlineMail,
} from "react-icons/ai";
import { styled } from "styled-components";

export default function Footer() {
  return (
    <Wrapper>
      <InnerWrapper>
        <TextBody variant="four">
          © 2023 Copyright &copy; All Rights Reserved.
        </TextBody>
        <div>
          <Link passHref href="mailto:philixbob@gmail.com">
            <AiOutlineMail size={15} />
          </Link>
          <Link
            passHref
            href="https://wa.me/2348108850572?text=Hi+Philix%2C+I%27m+just+visited+your+website."
          >
            <FaWhatsapp size={15} />
          </Link>
          <Link passHref href="tel:+2348108850572">
            <AiFillPhone size={15} />
          </Link>
          <Link passHref href="https://linkedin.com/in/eligbue-felix-362372124">
            <AiFillLinkedin size={15} />
          </Link>
          <Link passHref href="https://facebook.com/eligbue.felix.7">
            <AiFillFacebook size={15} />
          </Link>
          <Link passHref href="https://twitter.com/eligbue_felix">
            <AiFillTwitterSquare />
          </Link>
        </div>
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
  justify-content: space-between;
  padding: 0 10px;

  div {
    a {
      color: white;
      margin-left: 10px;
      margin-right: 10px;
    }
  }
`;
