import { getColumnLetter } from '../utils'
import { Actions, UpdateCellProps } from './types'

type CellsList = CellProps[][]

type ActionProps = {
  type: Actions
  payload: UpdateCellProps
}

type StateProps = {
  cells: CellsList
}

const generateCode = (value: string, constants: string) => {
  return `(() => {
    ${constants}
    return ${value}
  })()`
}

const generateCellsConstants = (cells: CellsList) =>
  cells
    .map((rows, x) =>
      rows
        .map((cell, y) => {
          const letter = getColumnLetter(x)
          const cellId = `${letter}${y}`

          return `const ${cellId} = ${cell.computedValue}`
        })
        .join('\n')
    )
    .join('\n')

const computeValue = (value: string, constants: string) => {
  if (!value.startsWith?.('=')) return value

  const valueToUse = value.substring(1)
  let computedValue

  try {
    computedValue = eval(generateCode(valueToUse, constants)) // eslint-disable-line no-eval
  } catch ({ message }) {
    computedValue = `!ERROR ${message}`
  }

  return computedValue
}

const computedAllCells = (cells: CellsList, constants: string) =>
  cells.forEach(row => {
    row.forEach(cell => {
      const computedValue = computeValue(String(cell.value), constants)
      cell.computedValue = computedValue
    })
  })

const reducer = (state: StateProps, action: ActionProps) => {
  const { type, payload } = action

  if (type === Actions.UPDATE_CELL) {
    const cells = structuredClone(state.cells)
    const { column, row, value } = payload

    const constants = generateCellsConstants(cells)
    const cell = cells[column][row]

    const computedValue = computeValue(value, constants)

    cell.value = value
    cell.computedValue = computedValue

    computedAllCells(cells, generateCellsConstants(cells))

    return { cells }
  }

  return { cells: [] }
}

export default reducer
