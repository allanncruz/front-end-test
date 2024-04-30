import { StyledButton } from './style';
import { ButtonProps } from '../../interfaces/types';

export const Button = ({ children, primary, outline, onClick }: ButtonProps) => {
  return <StyledButton outline={outline} primary={primary} onClick={onClick}>{children}</StyledButton>;
};
