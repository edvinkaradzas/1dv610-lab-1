#!/usr/bin/env node

import { translate } from '../src/rovarspraket.js'
import { createInterface } from 'node:readline/promises'

const nameFromArguments = process.argv.slice(2).join(' ')
const name = nameFromArguments || await askForName() || 'du'

console.log(translate(`Hej, ${name}!`))

async function askForName() {
  const rl = createInterface({ input: process.stdin, output: process.stdout })
  const answer = await rl.question('Vad heter du? ')
  rl.close()

  return answer.trim()
}