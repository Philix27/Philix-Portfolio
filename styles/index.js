import styled from 'styled-components'

export const Section = styled.section`
  display: ${(props) => props.grid ? "grid" : "flex" };
  flex-direction: ${(props) => props.row ? "row" : "column" };
  padding: ${(props) => props.nopadding ? "0" : "32px 48px 0" } ;
  margin: 50px auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  align-items:  center;
  grid-template-columns: repeat(2, 1fr);

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.nopadding ? "0" : "16px 16px 0" } ;

    width: calc(100vw - 32px);
    flex-direction: column;
  }
`

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => props.main ? '65px' : '56px'};
  line-height: ${(props) => props.main ? '72px' : '56px'};
  width: max-content;
  max-width: 100%;
  color: #404346;
  margin-bottom: 16px;
  padding: ${(props) => props.main ? '58px 0 16px' : '0'};

  @media ${props => props.theme.breakpoints.md}{
    font-size: ${(props) => props.main ? '56px' : '48px'};
    line-height: ${(props) => props.main ? '56px' : '48px'};
    margin-bottom: 12px;
    padding: ${(props) => props.main ? '40px 0 12px' : '0'};
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => props.main ? '28px' : '32px'};
    line-height: ${(props) => props.main ? '32px' : '40px'};
    margin-bottom: 8px;
    padding: ${(props) => props.main ? '16px 0 8px' : '0'};
    max-width: 100%;
  }
`

export const SectionJumbotron = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  /* color: rgba(255, 255, 255, 0.5); */

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 18px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`
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
