# Markdown handle

- Start Date: 2024-03-27
- RFC PR:

## Summary

Render the markdown file to html via NextJS SSG(Static Site Generation)

## Motivation

I like to use markdown for bloging. I manage posts by hexo on now, but it is based on  CommonJS specification, So it brought me some trouble!

- CommonJS specification:
  1. unable to set the project to module type.
  2. if the dependency is module type project, inconvenient to use when developemt plug-in.

Parse markdown file with [markdown-it](https://github.com/markdown-it/markdown-it) dependency, it's perfectly for me. It supports and has a large number plug-ins!

Highlighting code using [shiki](https://github.com/shikijs/shiki)

## Detailed design

This is the bulk of the RFC. Explain the design in enough detail for somebody
familiar with React to understand, and for somebody familiar with the
implementation to implement. This should get into specifics and corner-cases,
and include examples of how the feature is used. Any new terminology should be
defined here.

# Drawbacks

Why should we *not* do this? Please consider:

- implementation cost, both in term of code size and complexity
- whether the proposed feature can be implemented in user space
- the impact on teaching people React
- integration of this feature with other existing and planned features
- cost of migrating existing React applications (is it a breaking change?)

There are tradeoffs to choosing any path. Attempt to identify them here.

# Alternatives

What other designs have been considered? What is the impact of not doing this?

# Adoption strategy

If we implement this proposal, how will existing React developers adopt it? Is
this a breaking change? Can we write a codemod? Should we coordinate with
other projects or libraries?

# How we teach this

What names and terminology work best for these concepts and why? How is this
idea best presented? As a continuation of existing React patterns?

Would the acceptance of this proposal mean the React documentation must be
re-organized or altered? Does it change how React is taught to new developers
at any level?

How should this feature be taught to existing React developers?

# Unresolved questions

Optional, but suggested for first drafts. What parts of the design are still
TBD?
