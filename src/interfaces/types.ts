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
  buttonsActions?: boolean
}

export interface IHeaderContent {
  title: string,
  children?: React.ReactNode
}

export interface IContext {
  toggleTheme(): void;
  theme: ITheme;
  selectedItems: INumbersProps[];
  addItem: (item: INumbersProps) => void;
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
  onClick?: () => void;
  children: React.ReactNode;
}