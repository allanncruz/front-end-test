import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  animation: ${rotate} 1s linear infinite;
  margin: 200px 0 auto;
  text-align: center;
  font-size: 40px;
  height: 40px;
  color: ${props => props.theme.colors.white};

`
