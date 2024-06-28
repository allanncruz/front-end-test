import { StyledButton } from './style';
import { ButtonProps } from '../../interfaces/types';

export const Button = ({ children, primary, secondary, danger, onClick, className }: ButtonProps) => {
  return <StyledButton secondary={secondary} primary={primary} danger={danger} onClick={onClick} className={className}>{children}</StyledButton>;
};
