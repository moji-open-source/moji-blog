interface Repo {
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  fork: boolean
}

export async function getFeaturedRepos(count = 3): Promise<Repo[]> {
  const res = await fetch('https://api.github.com/users/clovu/repos?per_page=100&sort=stars&direction=desc', {
    next: { revalidate: 3600 },
  })

  if (!res.ok) return []

  const repos: Repo[] = await res.json()
  return repos.filter(r => !r.fork).slice(0, count)
}
