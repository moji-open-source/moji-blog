import path from 'node:path'
import process from 'node:process'

function createCommand(prefix, join) {
  return filenames => `${prefix} ${filenames.map(f => path.relative(process.cwd(), f)).join(` ${join} `)}`
}

const buildEslintCommand = createCommand('eslint --fix ', '')

export default {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
}
