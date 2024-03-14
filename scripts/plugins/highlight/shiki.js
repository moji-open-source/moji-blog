const shiki = require("../../../shikijs.cjs")

const bundledLanguageList = await shiki.getBundledLanguageList()

const hl = await shiki.getHighlighter({
  themes: ["light-plus"],
  langs: bundledLanguageList, // register all language support
})


hexo.extend.highlight.register("shiki", (content, options) => {
  const html = hl.codeToHtml(content, {
    lang: options.lang,
    theme: "light-plus",
    meta: {
      class: `shiki light-plus language-${options.lang}`,
      dataLanguage: options.lang?.toLocaleUpperCase()
    }
  })
  return html
})
