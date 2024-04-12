export interface numbersProps {
  id: number,
  value: string,
  monthyPrice: string,
  setupPrice: string,
  currency: string
}

export interface dataTableProps {
  data: numbersProps[],
  dataHeader: Array<any>
}

export interface HeaderContentProps {
  title: string,
  children?: React.ReactNode
}
