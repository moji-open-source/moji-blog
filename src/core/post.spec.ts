import { describe, expect, it, vi } from 'vitest'
import { getPostBySlug, getPostList } from './post'

vi.mock('fast-glob', () => {
  return {
    default: () => {
      return [
        '/pages/posts/post1.md',
      ]
    },
  }
})
vi.mock('fs-extra', () => {
  return {
    default: {
      readFile: () => {
        return `---
title: Feign远程调用丢失请求头问题
autor: Clover
date: 2024-04-07 21:45:09
lang: zh-CN
tags: java,
categories: NOTES
---
hello world
      `
      },
    },
  }
})

describe('post core', () => {
  it('shold return all posts', async () => {
    const posts = await getPostList()

    expect(posts).not.toBeFalsy()

    expect(posts[0].title).toBe('Feign远程调用丢失请求头问题')
  })

  it('shold get a post by slug', async () => {
    const post = await getPostBySlug('post1')

    expect(post).not.toBeFalsy()
    expect(post?.title).toBe('Feign远程调用丢失请求头问题')

    const postNotExists = await getPostBySlug('postsfa')

    expect(postNotExists).toBeFalsy()
  })
})
