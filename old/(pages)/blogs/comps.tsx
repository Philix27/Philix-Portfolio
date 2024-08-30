import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  padding-top: 10px;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  row-gap: 10px;
`;

export const Card = styled.div`
  /* background-color: #e8e8e8; */
  display: flex;
  justify-content: space-between;
  border-bottom: solid 0.1px #979797a7;
  padding-bottom: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  &:hover {
    color: #970000;
    border-bottom: solid 2px red;
    p,
    svg {
      color: #970000;
    }
  }
`;
export const Img = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 25px;
`;
export const FirstContent = styled.div`
  display: flex;
  align-items: flex-start;
  text-align: left;
  div {
    /* padding: 0 20px; */
  }
`;
export const SecondContent = styled.div`
  display: flex;
  padding-bottom: 10px;
  color: grey;
  align-items: center;
  svg {
    margin-right: 10px;
  }
  /* padding: 0 20px; */
`;
