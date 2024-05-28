import styled from 'styled-components';
import { ButtonProps } from '../../interfaces/types';

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${props => (props.primary ? props.theme.colors.primary : props.theme.colors.tertiary)};
  color: #fff;
  padding: 0.55em 1.2em;
  margin-right: 5px;
  border-radius: 3px;
  cursor: pointer;
    &:hover {
    opacity: .8;
  } 
`;