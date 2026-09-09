const LETTERS = 'abcdefghijklmnopqrstuvwxyzåäö'
const VOWELS = 'aeiouyåäö'

/**
 * Översätter text till rövarspråket.
 * Varje konsonant fördubblas med ett "o" emellan: k -> kok, s -> sos.
 */
export function translate(text) {
  return [...text].map(translateCharacter).join('')
}

function translateCharacter(character) {
  if (!isConsonant(character)) {
    return character
  }

  return character + 'o' + character.toLowerCase()
}

function isConsonant(character) {
  const lowercased = character.toLowerCase()

  return LETTERS.includes(lowercased) && !VOWELS.includes(lowercased)
}