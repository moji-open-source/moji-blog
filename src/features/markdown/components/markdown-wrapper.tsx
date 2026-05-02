'use client'
import styles from './markdown-wrapper.module.css'

export function MarkdownWrapper({ children }: React.PropsWithChildren) {
  return <div className={styles.article}>{children}</div>
}
