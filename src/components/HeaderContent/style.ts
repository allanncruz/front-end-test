import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 720px){
    flex-direction: column;
    justify-content: center;
    
  }
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.white};
  font-size: 32px;
  position: relative;

  &::after{
    content: "";
    width: 40px;
    height: 7px;
    background-color: ${props => props.theme.colors.info};
    display: block;
  }


    @media(max-width: 720px){
      font-size: 22px;
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      &::after{
        margin: 0 auto;
      }
    }
`;