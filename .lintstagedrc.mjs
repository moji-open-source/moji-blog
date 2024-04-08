import path from 'node:path'
import process from 'node:process'

function buildEslintCommand(filenames) {
  return `next lint --fix --file ${filenames
    .map(f => path.relative(process.cwd(), f))
    .join(' --file ')}`
}

export default {
  '*.{js,jsx,ts,tsx}': 'eslint --fix',
}
