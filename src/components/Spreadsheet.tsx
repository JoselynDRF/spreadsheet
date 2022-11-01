import { FC } from 'react'
import { useSpreadsheet } from '../hooks/useSpreadsheet'
import TableCell from './TableCell'
import TableColumns from './TableColumns'
import TableHead from './TableHead'
import TableRows from './TableRows'

const Spreadsheet: FC<SpreadsheetProps> = ({ rows, columns }) => {
  const { cells, updateCell } = useSpreadsheet({ rows, columns })

  return (
    <table>
      <TableHead columns={columns} />
      <tbody>
        <TableRows rows={rows}>
          {row => (
            <TableColumns columns={columns}>
              {column => (
                <TableCell
                  cell={cells[column][row]}
                  update={(value: string) => updateCell({ column, row, value })}
                />
              )}
            </TableColumns>
          )}
        </TableRows>
      </tbody>
    </table>
  )
}

export default Spreadsheet
