import { describe, test, expect } from "vitest"
import { getPostList } from "./post"

describe("post core", () => {
  test("shold return all posts", async () => {
    const posts = await getPostList()

    console.log(posts);
  })
})