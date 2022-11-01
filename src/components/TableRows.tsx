import { FC } from 'react'
import { createRange } from '../utils'

interface TableRowsProps {
  rows: number
  children: (row: number) => JSX.Element
}

const TableRows: FC<TableRowsProps> = ({ rows, children }) => (
  <>
    {createRange(rows).map(row => (
      <tr key={row}>
        <td
          key={`first-${row}`}
          className="w-10 bg-gray-100 text-center font-semibold border-solid border-r-2 border-b-2 border-gray-200"
        >
          {row}
        </td>
        {children(row)}
      </tr>
    ))}
  </>
)

export default TableRows
