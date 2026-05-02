import type { ComponentPropsWithoutRef } from 'react'
import type { MDXComponents } from 'mdx/types'

import { cn } from '@/lib/utils'

function Anchor({ className, href, rel, target, ...props }: ComponentPropsWithoutRef<'a'>) {
  // Posts should get safe external-link behavior without repeating it in every MDX file.
  const isExternal = typeof href === 'string' && /^https?:\/\//.test(href)

  return (
    <a
      className={cn('font-medium underline underline-offset-4', className)}
      href={href}
      rel={isExternal ? 'noreferrer noopener' : rel}
      target={isExternal ? '_blank' : target}
      {...props}
    />
  )
}

/**
 * Next calls this hook for every MDX file.
 * The final spread lets callers replace defaults per render tree.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: Anchor,
    blockquote: ({ className, ...props }) => (
      <blockquote className={cn('my-6 border-l-2 pl-4 text-muted-foreground', className)} {...props} />
    ),
    code: ({ className, ...props }) => (
      <code className={cn('rounded bg-muted px-1.5 py-0.5 font-mono text-sm', className)} {...props} />
    ),
    h1: ({ className, ...props }) => (
      <h1 className={cn('mt-10 scroll-m-20 text-3xl font-semibold tracking-normal', className)} {...props} />
    ),
    h2: ({ className, ...props }) => (
      <h2 className={cn('mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-normal', className)} {...props} />
    ),
    h3: ({ className, ...props }) => (
      <h3 className={cn('mt-8 scroll-m-20 text-xl font-semibold tracking-normal', className)} {...props} />
    ),
    img: ({ className, alt, ...props }) => (
      <img className={cn('my-6 rounded-md border', className)} alt={alt ?? ''} {...props} />
    ),
    ol: ({ className, ...props }) => (
      <ol className={cn('my-6 ml-6 list-decimal space-y-2', className)} {...props} />
    ),
    p: ({ className, ...props }) => (
      <p className={cn('my-5 leading-7', className)} {...props} />
    ),
    pre: ({ className, ...props }) => (
      <pre className={cn('my-6 overflow-x-auto rounded-md border bg-muted p-4 text-sm', className)} {...props} />
    ),
    table: ({ className, ...props }) => (
      <div className="my-6 w-full overflow-y-auto">
        <table className={cn('w-full text-sm', className)} {...props} />
      </div>
    ),
    td: ({ className, ...props }) => (
      <td className={cn('border px-4 py-2', className)} {...props} />
    ),
    th: ({ className, ...props }) => (
      <th className={cn('border px-4 py-2 text-left font-semibold', className)} {...props} />
    ),
    ul: ({ className, ...props }) => (
      <ul className={cn('my-6 ml-6 list-disc space-y-2', className)} {...props} />
    ),
    ...components,
  }
}
