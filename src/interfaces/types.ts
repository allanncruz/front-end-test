export interface INumbersProps {
  id: number,
  value: string,
  monthyPrice: string,
  setupPrice: string,
  currency: string
}

export interface IDataTable {
  data: INumbersProps[],
  dataHeader: Array<any>
}

export interface IHeaderContent {
  title: string,
  children?: React.ReactNode
}

export interface IThemeContext {
  toggleTheme(): void;
  theme: ITheme;
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