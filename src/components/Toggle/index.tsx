import { IToggleProps } from "../../interfaces/types";
import { ToggleLabel, ToggleSelector } from "./style";


export const Toggle = ({
  labelLeft,
  labelRight,
  checked,
  onChange
}: IToggleProps) => (
    <div>
      <ToggleLabel>{labelLeft}</ToggleLabel>
      <ToggleSelector
        height={15}
        width={35}
        checked={checked}
        uncheckedIcon={false}
        checkedIcon ={false} 
        onChange={onChange} />
      <ToggleLabel>{labelRight}</ToggleLabel>
    </div>
)