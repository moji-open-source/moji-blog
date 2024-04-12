import styles from './post-view.module.css'

interface PostViewProps extends React.PropsWithChildren {
  html: string
}
export function PostView(props: PostViewProps) {
  return (
    <div
      className={styles.MarkdownBody}
    >
      <div dangerouslySetInnerHTML={{ __html: props.html }} />
      {props.children}
    </div>
  )
}
