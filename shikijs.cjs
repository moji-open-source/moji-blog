async function getHighlighter(...args) {
  const shiki = await import("shiki")
  return shiki.getHighlighter(...args)
}

async function getBundledLanguageList() {
  const shiki = await import("shiki")
  return Object.keys(shiki.bundledLanguages)
}

async function createCssVariablesTheme(args) {
  const shiki = await import("shiki")
  return shiki.createCssVariablesTheme(args)
}

module.exports = getHighlighter
module.exports.getHighlighter = getHighlighter
module.exports.getBundledLanguageList = getBundledLanguageList
module.exports.createCssVariablesTheme = createCssVariablesTheme