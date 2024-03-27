const path = require("path")

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`

console.log('hello world');

module.exports = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand],
}