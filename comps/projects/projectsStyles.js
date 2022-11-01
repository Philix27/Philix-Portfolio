import styled from "styled-components";

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #414143;
  padding: 0.5rem 0;
  font-size: ${(props) => "1.9rem"};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  /* color: #dce3e7; */
  /* font-family: 'Droid Serif', serif; */
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

// export const CardInfo = styled.p`
//   width: 100%;
//   padding: 0 50px;
//   font-style: 2rem;
//   line-height: 24px;
//   text-align: justify;
//     @media ${(props) => props.theme.breakpoints.sm} {
//     padding:.3rem

// }
// `;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`;
export const Tag = styled.li`
  /* color: #d8bfbf; */
  font-size: 1.8rem;
  padding-right: 8px;
`;
