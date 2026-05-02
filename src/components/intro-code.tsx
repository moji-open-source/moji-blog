import { addClassToHast, createCssVariablesTheme, createHighlighter } from 'shiki'

import { Geist_Mono } from 'next/font/google'
import { TrafficLightButton } from './traffic-light-button'
import { Card, CardContent, CardHeader } from './ui/card'
import { cn } from '@/lib/utils'

const CODE_SNIPPET = `let clovu: Dev<'static, impl Future> = Dev {
    name: "Clover You",
    age: 24,
    role: "Full Stack",
    passion: |
"Building things",
"Genshin Impact"`

const geistMono = Geist_Mono({ subsets: ['latin'] })

const colombinaTheme = createCssVariablesTheme({
  variableDefaults: {
    background:            'transparent',
    foreground:            '#e8ddd5',
    'token-constant':        '#d4a574',
    'token-string':          '#c9a0b8',
    'token-comment':         '#6b5e6a',
    'token-keyword':         '#b8a9d4',
    'token-parameter':       '#d4b0a0',
    'token-function':        '#a8c4b8',
    'token-string-expression': '#c4b090',
    'token-punctuation':     '#8a7e88',
    'token-link':            '#b0bcd4',
  },
})

const highlighter = await createHighlighter({
  langs: ['rust'],
  themes: [colombinaTheme],
})

export async function IntroCode() {
  const out = await highlighter.codeToHtml(CODE_SNIPPET, {
    lang: 'rust',
    theme: 'css-variables',
    transformers: [{
      code(node) {
        addClassToHast(node, geistMono.className)
      },
    }],
  })

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-2">
          <TrafficLightButton />
          <span className={cn(
            'text-[12px] text-muted-foreground/70 dark:text-muted-foreground/40',
            geistMono.className,
          )}>clover.rs</span>
        </div>
      </CardHeader>
      <CardContent>
        <div dangerouslySetInnerHTML={{ __html: out }} />
      </CardContent>
    </Card>
  )
}
