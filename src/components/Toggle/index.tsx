import { ToggleLabel, ToggleSelector } from "./style";

export const Toggle = () => (
    <>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleSelector 
        checked 
        uncheckedIcon={false}
        checkedIcon ={false} 
        onChange={() => console.log('alterar')} />
      <ToggleLabel>Dark</ToggleLabel>
    </>
)