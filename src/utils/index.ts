const FIRST_CHAR_CODE = 65 // Letter A

export const createRange = (length: number) =>
  Array.from({ length }, (_, i) => i)

export const getColumnLetter = (column: number) =>
  String.fromCharCode(FIRST_CHAR_CODE + column)
