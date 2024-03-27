import { initHexo } from "./hexo"
export * from "./hexo"

export async function getHexoPostBySlug(slug: string) {
  const hexo = await initHexo()

  const path = `source/_posts/${slug}`
  // console.log(path);

  const post = hexo.database.model("Page").findOne({
    path: {
      eq: `post/${slug}/`
    }
  })


  // hexo.post.create({
  //   title: 'test',
  // })

  console.log(post)

}