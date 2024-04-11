import styles from './post-view.module.css'

export function PostView(props: { html: string }) {
  return (
    <div
      className={styles.MarkdownBody}
      dangerouslySetInnerHTML={{ __html: props.html }}
    >
    </div>
  )
}
