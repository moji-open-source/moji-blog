import type MarkdownIt from 'markdown-it'
import Shiki from '@shikijs/markdown-it'

function parseMetaString(_metaString: string, _code: string, lang: string) {
  return {
    dataLanguage: lang,
  }
}

export async function useShiki(md: MarkdownIt) {
  const shiki = await Shiki({
    themes: {
      light: 'vitesse-light',
      dark: 'nord',
    },
    theme: {
      colorReplacements: {
        '#2e3440ff': '#282a2d',
      },
    },
    meta: {
      dataLanguage: 'java',
    },
    parseMetaString,
  })

  md.use(shiki)
}
