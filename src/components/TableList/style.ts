import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 0 40px 0;
`;

export const ListRows = styled.div`
  padding: 15px;
  margin: 10px 0;
  border-radius: 5px;
  border: 4px;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.white};  
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 12px;
  transition: all.3s;
  position: relative;
  overflow: hidden;

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
    opacity: .8;

    &::before{
      width: 5px;
    }
  }
  

  > div {
      &:nth-child(1){
      font-size: 18px;
      font-weight: 900;
    }
  }


  @media(max-width: 720px){
    > div {
        &:nth-child(1){
        font-size: 13px;
        width: 200%;
      }
    }
  }
`;

export const HeaderList = styled.div`
  padding: 15px 10px;
  display: flex;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.white};
  border-top: solid 1px ${props => props.theme.colors.primaryLight};
  border-bottom: solid 1px ${props => props.theme.colors.primaryLight};
  font-weight: 900;


  @media(max-width: 720px){
    font-size: 14px;
  }

`;

export const ListColumns = styled.div`
  width: 100%;
  text-align: center;
`;

