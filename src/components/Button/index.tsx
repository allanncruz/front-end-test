import { StyledButton } from './style';
import { ButtonProps } from '../../interfaces/types';

export const Button = ({ children, primary, secondary, onClick, className }: ButtonProps) => {
  return <StyledButton secondary={secondary} primary={primary} onClick={onClick} className={className}>{children}</StyledButton>;
};
