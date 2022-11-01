import { FC, useState } from 'react'

interface TableCellProps {
  cell: CellProps
  update: (value: string) => void
}

const TableCell: FC<TableCellProps> = ({
  cell: { value, computedValue },
  update
}) => {
  const [isInput, setIsInput] = useState(false)

  const updateValue = (value: string) => {
    setIsInput(false)
    update(value)
  }

  return isInput ? (
    <input
      autoFocus
      className="w-full px-1"
      defaultValue={value}
      onBlur={({ target: { value } }) => updateValue(value)}
    />
  ) : (
    <span
      className="w-full px-1 block hover:cursor-cell"
      onClick={() => setIsInput(true)}
    >
      {computedValue}
    </span>
  )
}

export default TableCell
