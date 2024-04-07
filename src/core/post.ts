import fg from "fast-glob"
import fs from "fs-extra"
import matter from "gray-matter"
import MarkdownIt from 'markdown-it'
import * as path from "node:path"

const markdown = MarkdownIt({
  html: true,
  breaks: true,
  linkify: true,
})


let __POSTS: Post[]
export async function getPostList() {
  if (__POSTS) return __POSTS

  const files = await fg("pages/posts/*.md")

  let posts = await Promise.all(files.map<Promise<Post>>((file) => {
    return new Promise(async (resolve) => {
      const raw = await fs.readFile(file, "utf-8")
      const { data, content } = matter(raw)

      const html = markdown.render(content)

      const [_, fileFullPath] = file.match(/pages\/posts\/(.*)\.md/) ?? []
      const fileNameAlias = fileFullPath.replaceAll('/', '-')

      resolve({
        ...data,
        date: new Date(data.date),
        content: html,
        author: ["Clover"],
        categories: data.categories?.split(','),
        more: '',
        slug: fileNameAlias,
        tags: data.tags?.split(','),
        title: data.title,
        cover: data.cover
      })
    })
  }))
  posts = posts.filter(Boolean)

  posts.sort((a, b) => +new Date(b?.date ?? 0) - +new Date(a?.date ?? 0))

  __POSTS = posts

  return posts
}

let __POSTS_MAP: Record<string, Post>
export async function getPostRouteMap() {
  if (__POSTS_MAP) return __POSTS_MAP

  const posts = await getPostList()
  const postsMap = posts.reduce<Record<string, Post>>((acc, cuur) => {
    acc[cuur.slug] = cuur
    return acc
  }, {})

  __POSTS_MAP = postsMap

  return postsMap
}

export async function getPostBySlug(slug: string) {
  const posts = await getPostRouteMap()
  if (!posts) return

  return posts[slug]
}

export async function getSlugs() {
  const posts = await getPostList()
  return posts.map(it => it.slug)
}