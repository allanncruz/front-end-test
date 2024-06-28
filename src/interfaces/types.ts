export interface INumbersProps {
  id: number,
  value: string,
  monthyPrice: string,
  setupPrice: string,
  currency: string
}

export interface IDataTable {
  data: INumbersProps[],
  dataHeader: Array<any>,
  buttonsActions?: boolean,
  activeButton?: string
}

export interface IHeaderContent {
  title: string,
  children?: React.ReactNode
}

export interface IContext {
  toggleTheme(): void;
  theme: ITheme;
  selectedItems: INumbersProps[];
  handleAddItem: (item: INumbersProps) => void;
  handleRemoveItem: (item: INumbersProps) => void;
  removeAddButton: number[];
  removeDeletButton: number[]
}

export interface ITheme {
  title: string;
  colors: {
    primary: string;
    primaryLight: string;
    secondary: string;
    tertiary: string;

    white: string;
    black: string;
    gray: string;

    success: string;
    info: string;
    warning: string;
    danger: string
  },
}

export interface IToggleProps {
  labelLeft: string,
  labelRight: string,
  checked: boolean;
  onChange(): void;
}

export interface ButtonProps {
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string
}