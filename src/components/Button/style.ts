import styled from 'styled-components';
import { ButtonProps } from '../../interfaces/types';

const getBackgroundColor = (props: any) => {
  if (props.primary) {
    return props.theme.colors.primary;
  } else if (props.danger) {
    return props.theme.colors.danger;
  } else if (props.secondary) {
    return props.theme.colors.tertiary;
  }
  return 'defaultColor';
};

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${props => getBackgroundColor(props)};
  color: ${props => (props.primary || props.danger ? '#fff' : props.theme.colors.white)};
  padding: 0.55em 1.2em;
  margin-right: 5px;
  border-radius: 3px;
  cursor: pointer;
    &:hover {
    opacity: .8;
  } 
`;