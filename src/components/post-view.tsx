import styles from './post-view.module.css'

export function PostView(props: { html: string }) {
  return (
    <div
      id="article-container"
      className={styles.MarkdownBody}
      dangerouslySetInnerHTML={{ __html: props.html }}
    >
    </div>
  )
}
