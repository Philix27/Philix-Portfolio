import styled from 'styled-components'

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 18px;
  line-height: 35px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  /* color: rgba(255, 255, 255, 0.5); */

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 16px;
    line-height: 30px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 20px;
    padding-bottom: 16px;
  }
`


export const Btn = styled.div` 
  width: 30vw;
  height: 3.5rem;
  /* padding: auto; */
  margin: 20px 0;
  background-color: #022044;
  font-size: 1.45rem;
  /* font-weight: 700; */
  display: flex;
  /* flex-direction: row; */
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.5s ease;
  border-radius: 50px;
  border-color: #fff;
  border-width: 1px;
  border-style: solid;
  color:  #fff;

&:hover{
 background-color: #04336d;
}

&:focus {
    outline: none;
}

&:active {
    background: #e0e4eb;
    border: 1px solid #304169;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

   @media ${(props) => props.theme.breakpoints.md}{
    width: 40vw;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 50vw;
  }
`
