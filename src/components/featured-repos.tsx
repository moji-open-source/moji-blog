import { Star } from 'lucide-react'
import { Badge } from './ui/badge'
import { getFeaturedRepos } from '@/services/github'

export async function FeaturedRepos() {
  const repos = await getFeaturedRepos()

  if (!repos.length) return null

  return (
    <div className="space-y-3">
      {repos.map(repo => (
        <a
          key={repo.name}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium group-hover:underline truncate mr-2">{repo.name}</span>
            <span className="flex items-center gap-1.5 shrink-0">
              {repo.language && <Badge variant="secondary">{repo.language}</Badge>}
              <span className="flex items-center gap-0.5 text-xs text-muted-foreground">
                <Star className="size-3" />
                {repo.stargazers_count}
              </span>
            </span>
          </div>
          {repo.description && (
            <div className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{repo.description}</div>
          )}
        </a>
      ))}
    </div>
  )
}
