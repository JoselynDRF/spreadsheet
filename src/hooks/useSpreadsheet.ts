import { useReducer } from 'react'
import reducer from '../store/reducer'
import { Actions, getInitialState, UpdateCellProps } from '../store/types'

export const useSpreadsheet = ({ rows, columns }: SpreadsheetProps) => {
  const [{ cells }, dispatch] = useReducer(
    reducer,
    getInitialState({ rows, columns })
  )

  const updateCell = (payload: UpdateCellProps) =>
    dispatch({
      type: Actions.UPDATE_CELL,
      payload
    })

  return { cells, updateCell }
}
