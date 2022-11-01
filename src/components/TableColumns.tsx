import { FC } from 'react'
import { createRange } from '../utils'

interface TableColumnsProps {
  columns: number
  children: (column: number) => JSX.Element
}

const TableColumns: FC<TableColumnsProps> = ({ columns, children }) => (
  <>
    {createRange(columns).map(column => (
      <td
        key={column}
        className="w-24 border-solid border-r-2 border-b-2 border-gray-200"
      >
        {children(column)}
      </td>
    ))}
  </>
)

export default TableColumns
