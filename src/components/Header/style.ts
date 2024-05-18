import styled from "styled-components";

export const Container = styled.header`
    background-color: ${props => props.theme.colors.tertiary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
`;



export const Brand = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.white};

  svg {
    background-color: ${props => props.theme.colors.warning};
    border-radius: 4px;
    margin-right: 10px;
    color: #fff;
  }

  @media(max-width: 720px){
    display: flex;
    justify-content: center;
    svg {
      margin-right: 0;
    }
  }
`;

export const BrandLabel = styled.label`
  font-weight: 800;
  font-size: 17px;

  @media(max-width: 720px){
    display: none;
  }
`;