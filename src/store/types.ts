export enum Actions {
  UPDATE_CELL = 'UPDATE_CELL'
}

export type UpdateCellProps = {
  column: number
  row: number
  value: string
}

export const getInitialState = ({ rows, columns }: SpreadsheetProps) => {
  const cells = Array.from({ length: columns }, () =>
    Array.from({ length: rows }, () => ({
      value: 0,
      computedValue: 0
    }))
  )

  return { cells }
}
