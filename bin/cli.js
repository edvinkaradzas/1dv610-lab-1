#!/usr/bin/env node

const args = process.argv.slice(2)
const fullName = args.join(' ')

console.log(`Hello, ${fullName}!`)