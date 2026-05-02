declare module '*.mdx' {
  import type { ComponentType } from 'react'

  export const frontmatter: Record<string, unknown> | undefined

  const MDXContent: ComponentType
  export default MDXContent
}

declare module '*.md' {
  import type { ComponentType } from 'react'

  export const frontmatter: Record<string, unknown> | undefined

  const MDXContent: ComponentType
  export default MDXContent
}
