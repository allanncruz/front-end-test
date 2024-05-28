import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 0 40px 0;

  a button {
    padding: 3px 10px;
    margin-left: 14px;
    @media(max-width: 720px){
      padding: 0;
    }
  }
`;

export const LabelButton = styled.div`
  &::after{
    content: "Reservar";
    @media(max-width: 720px){
      content: "+";
    }
  }
`

export const ListRows = styled.div`
  padding: 15px;
  margin: 1px 0;
  border: 4px;
  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.white};  
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 12px;
  transition: all.3s;
  position: relative;
  overflow: hidden;
  border-bottom: solid 1px ${props => props.theme.colors.primaryLight};

  &::before{
    content: "";
    position: absolute;
    left: 0;
    width: 0;
    height: 100%;
    background-color: ${props => props.theme.colors.warning};
    transition: all.3s;
  }

  &:hover {

    &::before{
      width: 5px;
    }
  }
  

  > div {
      &:nth-child(1){
      width: 100px;
    }
  }

  @media(max-width: 720px){
    padding: 10px 0;
  }
`;

export const HeaderList = styled.div`
  padding: 15px 10px;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.white};
  border-top: solid 1px ${props => props.theme.colors.primaryLight};
  border-bottom: solid 1px ${props => props.theme.colors.primaryLight};
  font-weight: 900;

  

  > div {
      &:nth-child(1){
      width: 100px;
    }
  }

  @media(max-width: 720px){
    font-size: 12px;
    &:first-child{
      display: none;
    }
  }

`;

export const ListColumns = styled.div`
  width: 100%;
  text-align: center;

  @media(max-width: 720px){
    button{
      padding: 3px 8px;
    }
    &:first-child{
      display: none;
    }
  }
`;


