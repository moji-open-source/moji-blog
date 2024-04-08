interface Post {
  /**
   * 标题
   */
  title: string
  /**
   * 内容
   */
  content: string
  /**
   * 日期
   */
  date: Date
  /**
   * 路径
   */
  slug: string
  /**
   * 标签
   */
  tags: string[]
  /**
   * 分类
   */
  categories: string[]
  /**
   * 文章摘要
   */
  more: string
  /**
   * 封面
   */
  cover?: string
  author: string[]
  [key: string]: any
}
