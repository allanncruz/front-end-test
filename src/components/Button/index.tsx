import { StyledButton } from './style';
import { ButtonProps } from '../../interfaces/types';

export const Button = ({ children, primary, secondary, onClick }: ButtonProps) => {
  return <StyledButton secondary={secondary} primary={primary} onClick={onClick}>{children}</StyledButton>;
};
