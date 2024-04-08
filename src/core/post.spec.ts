import { describe, expect, it } from 'vitest'
import { getPostList } from './post'

describe('post core', () => {
  it('shold return all posts', async () => {
    const posts = await getPostList()

    expect(posts).not.toBeFalsy()
  })
})
