import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  position: relative;

  &::after{
    content: "";
    width: 40px;
    height: 5px;
    background-color: #f98b08;
    display: block;
  }
`;

export const InputSearch = styled.input`
  padding: 7px 10px;
  border-radius: 4px;
`