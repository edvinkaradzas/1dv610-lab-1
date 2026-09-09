/**
 * Ramar in textrader i en ruta
 */
export function frame(text) {
  const border = '*'.repeat(text.length + 4)

  return `${border}\n| ${text} |\n${border}`
}