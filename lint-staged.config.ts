import type { Configuration  } from 'lint-staged'
import path from 'node:path'
import process from 'node:process'

function buildCommand(prefix: string, join: string) {
  return (filenames: readonly string[]) =>
    `${prefix} ${filenames.map((f) => path.relative(process.cwd(), f)).join(`${join} `)}`
}

function lint(): Configuration {
  return {
    '*.{js,jsx,ts,tsx}': [
      buildCommand('pnpm eslint --fix', ''),
    ],
  }
}

export default lint()
