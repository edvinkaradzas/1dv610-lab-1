import { translate } from './rovarspraket.js'
import { frame } from './frame.js'

/**
 * Skapar en inramad hälsning på rövarspråket.
 */
export function createGreeting(name) {
  const greeting = `Hej, ${name}!`

  return `${frame(translate(greeting))}\n(på svenska: ${greeting})`
}