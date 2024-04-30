import styled from 'styled-components';
import { ButtonProps } from '../../interfaces/types';

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${props => (props.primary ? props.theme.colors.warning : 'transparent')};
  color: ${props => (!props.primary ? props.theme.colors.warning : props.theme.colors.white)};
  padding: 0.55em 1.2em;
  border: ${props => (!props.primary && 'solid 1px')};
  border-color: ${props => (!props.primary && props.theme.colors.warning)};
  margin-right: 5px;
  border-radius: 3px;
  cursor: pointer;
/* 
  &:hover {
    background-color: ${props => (props.color ? 'darkblue' : 'lightblue')};
  } */
`;