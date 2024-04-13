import { ToggleLabel, ToggleSelector } from "./style";

interface IToggleProps {
  labelLeft: string,
  labelRight: string,
  checked: boolean;
  onChange(): void;
}

export const Toggle = ({
  labelLeft,
  labelRight,
  checked,
  onChange
}: IToggleProps) => (
    <>
      <ToggleLabel>{labelLeft}</ToggleLabel>
      <ToggleSelector 
        checked={checked}
        uncheckedIcon={false}
        checkedIcon ={false} 
        onChange={onChange} />
      <ToggleLabel>{labelRight}</ToggleLabel>
    </>
)