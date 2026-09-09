#!/usr/bin/env node

import { createInterface } from 'node:readline/promises'
import { translate } from '../src/rovarspraket.js'
import { frame } from '../src/frame.js'

const nameFromArguments = process.argv.slice(2).join(' ')
const name = nameFromArguments || await askForName() || 'du'
const greeting = `Hej, ${name}!`

console.log(frame(translate(greeting)))
console.log(`(på svenska: ${greeting})`)

async function askForName() {
  const rl = createInterface({ input: process.stdin, output: process.stdout })
  const answer = await rl.question('Vad heter du? ')
  rl.close()

  return answer.trim()
}