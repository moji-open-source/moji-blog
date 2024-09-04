---
title: Markdown 示例
tags: example
lang: zh-CN
date: 2024-08-23 13:39:27
categories: learn
pid: 39339a477aea1d494959790e4c7262679b64
last-edit: 2024-04-15 14:23:49
duration: 10min
author: Clover You
draft: true
imports: |
  import { ToggleTheme } from '#/components/ToggleTheme'
  import { GitHubTooltipAnchor } from '#/components/GitHubTooltip'
---
[[toc]]

This is a magic anchor, the cursor hovers over it to open the card <GitHubTooltipAnchor user="Clover-You" href="http://www.ctong.top">@Clover You</GitHubTooltipAnchor> | <GitHubTooltipAnchor user="antfu" href="https://github.com/antfu">@Anthony Fu</GitHubTooltipAnchor>

This is an external link <a href="http://www.ctong.top" target="_blank">Click</a> on it to go to the destination

As you can see, this is an interoperable butto! Try click it!

<div>
  <ToggleTheme />
</div>

# Markdown syntax guide

## Headers

# This is a Heading h1

## This is a Heading h2

###### This is a Heading h6

## Emphasis

*This text will be italic*

*This will also be italic*

**This text will be bold**

**This will also be bold**

*You **can** combine them*

## Lists

### Unordered

* Item 1
* Item 2
* Item 2a
* Item 2b

### Ordered

1. Item 1
2. Item 2
3. Item 3
    1. Item 3a
    2. Item 3b

## Images

<img src="https://markdownlivepreview.com/image/sample.webp" alt="This is an alt text." title="This is a sample image." className="!w-auto" />

## Links

You may be using [Markdown Live Preview](https://markdownlivepreview.com/).

## Blockquotes

> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## Tables

| Left columns  | Right columns |
| ------------- |:-------------:|
| left foo      | right foo     |
| left bar      | right bar     |
| left baz      | right baz     |

## Blocks of code

```
let message = 'Hello world';
alert(message);
```

render code by <a class="markdown-magic-link" href="https://shiki.style" target="_blank" rel="noopener">
  <img class="markdown-magic-link-image" src="https://avatars.githubusercontent.com/u/69196822?v=4" />
  @Shiki
</a>

```rust
use std::str::FromStr;

use proto_demo::user::{self, SigninRequest};
use tokio::runtime::Builder;
use tonic::{metadata::MetadataValue, Request};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
  let mut cli = user::user_client::UseClient::connect("http://[::1]:8081")
  .await?;

  let mut req = Request::new(SigninRequest {
      email: "cloveryou02@gmail.com".to_string(),
      password: "123456".to_string(),
  });

  let metadata = req.metadata_mut();

  let token = MetadataValue::from_str("authentication token")?;
  metadata.append("authentication", token);

  let res = cli.signin(req).await?;
  let res = res.get_ref();

  println!("gRPC response result: {:?}", res);

  Ok(())
}
```

## Inline code

This web site is using `markedjs/marked`.

::: warning
*here be dragons*
:::
