import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      screens: {
        '2xl': '100%',
        'sm': '100%',
        'md': '100%',
        'lg': '1024px',
        'xl': '1140px',
      },
    },
    extend: {
      colors: {
        'blog-primary': '#00151f',
        'bg2': '#f4f5f7',
        'bg1': '#fcfcfe',
      },
      textShadow: {
        title: '0 1px 10px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui(), plugin(({ matchUtilities, theme }) => {
    matchUtilities(
      {
        'text-shadow': value => ({
          textShadow: value,
        }),
      },
      { values: theme('textShadow') },
    )
  })],
}
export default config
