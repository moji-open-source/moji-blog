interface HexoPost {
  /**
   * 标题
   */
  title: string;
  /**
   * 内容
   */
  content: string;
  /**
   * 日期
   */
  date: string;
  /**
   * 路径
   */
  slug: string;
  /**
   * 标签
   */
  tags: string[];
  /**
   * 分类
   */
  categories: string[];
  /**
   * 文章摘要
   */
  more: string,
  excerpt: string
  /**
   * id
   */
  _id: string
  /**
   * 封面
   */
  cover?: string
}