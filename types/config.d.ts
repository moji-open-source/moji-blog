interface Config {
  website: WebsiteConfig
  theme: ThemeConfig
}

interface WebsiteConfig {
  title: string
  subtitle: string
  description: string
  keywords: string[]
  author: string
  domain: string
  logo: string
  logoText: string
  copyright: string
}

type ThemeMode = 'dark' | 'light'

interface ThemeConfig {
  mode: ThemeMode
}
