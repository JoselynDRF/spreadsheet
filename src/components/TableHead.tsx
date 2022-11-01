import { FC } from 'react'
import { createRange, getColumnLetter } from '../utils'

interface TableHeadProps {
  columns: number
}

const TableHead: FC<TableHeadProps> = ({ columns }) => (
  <thead className="[&_th]:bg-gray-100">
    <tr>
      <th className="border-solid border-r-2 border-b-2 border-gray-200" />
      {createRange(columns).map(column => (
        <th
          key={column}
          className="w-24 border-solid border-r-2 border-b-2 border-gray-200"
        >
          {getColumnLetter(column)}
        </th>
      ))}
    </tr>
  </thead>
)

export default TableHead
