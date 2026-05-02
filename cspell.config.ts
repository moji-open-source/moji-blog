import { defineConfig } from 'cspell'

export default defineConfig({
  import: ['@cspell/dict-lorem-ipsum/cspell-ext.json'],
  caseSensitive: false,
  dictionaries: ['cspell-ext'],
  dictionaryDefinitions: [
    { name: 'cspell-ext', path: './.cspell/cspell-ext.txt', addWords: true },
  ],
  ignorePaths: [
    'node_modules/**',
    'dist/**',
    'build/**',
    'coverage/**',
    '.next/**',
    '.nuxt/**',
    '.output/**',
    'out/**',
    '.turbo/**',
    '.cache/**',
    '.agents/**',
    '.claude/**',

    'pnpm-lock.yaml',
    'package-lock.json',
    'yarn.lock',

    '*.min.js',
    '*.min.css',
    '*.map',

    '*.svg',
    '*.png',
    '*.jpg',
    '*.jpeg',
    '*.gif',
    '*.webp',
    '*.ico',

    '**/generated/**',
    '**/__snapshots__/**',
    '**/*.snap',

    '.git/**',
    '.idea/**',
    '.vscode/**',

    '**/node_modules/**',
    '**/dist/**',
    '**/build/**',

    'src-tauri/target/**',
    'src-tauri/gen/**',

    '**/tsconfig.{js,ts,tsbuildinfo}',
    '**/tsconfig.*.{js,ts,tsbuildinfo}',
  ],
})
