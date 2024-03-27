import { describe, test, expect } from "vitest"
import { initHexo } from "../hexo"

describe("hexo", () => {
  test("init", async () => {
    const hexo = await initHexo()
    hexo.post.create({
      title: "test",
      content: "test"
    })
    console.log(hexo.database.Model)

  })
})