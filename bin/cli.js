#!/usr/bin/env node

import { createInterface } from 'node:readline/promises'

const nameFromArguments = process.argv.slice(2).join(' ')
const name = nameFromArguments || await askForName() || 'du'

console.log(`Hej, ${name}!`)

async function askForName() {
  const rl = createInterface({ input: process.stdin, output: process.stdout })
  const answer = await rl.question('Vad heter du? ')
  rl.close()

  return answer.trim()
}