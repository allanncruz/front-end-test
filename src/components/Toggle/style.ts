import styled from "styled-components";
import Switch, { ReactSwitchProps } from 'react-switch';

export const ToggleLabel = styled.small`
  color: ${props => props.theme.colors.white};
`;

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
  ({ theme }) => ({
    onColor: theme.colors.info,
    offColor: theme.colors.warning
  }))<ReactSwitchProps>`
    margin: 0 5px
  `;