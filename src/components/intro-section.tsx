import Link from 'next/link'
import { Badge } from './ui/badge'

const SKILLS = [
  { name: 'TypeScript', color: 'bg-[#3178C6]/15 text-[#3178C6] dark:bg-[#3178C6]/20 dark:text-[#5A9FD4]' },
  { name: 'Java', color: 'bg-[#ED8B00]/15 text-[#ED8B00] dark:bg-[#ED8B00]/20 dark:text-[#F0A030]' },
  { name: 'Rust', color: 'bg-[#DEA584]/15 text-[#B7410E] dark:bg-[#DEA584]/20 dark:text-[#DEA584]' },
  { name: 'Next.js', color: 'bg-black/10 text-black dark:bg-white/15 dark:text-white' },
  { name: 'React', color: 'bg-[#61DAFB]/15 text-[#0A7EA4] dark:bg-[#61DAFB]/20 dark:text-[#61DAFB]' },
  { name: 'Tauri', color: 'bg-[#FFC131]/15 text-[#A67C00] dark:bg-[#FFC131]/20 dark:text-[#FFC131]' },
] as const

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/clovu' },
  { label: 'X', href: 'https://x.com/clovu02' },
  { label: 'Bluesky', href: 'https://bsky.app/profile/clovu.me' },
  { label: 'Bilibili', href: 'https://space.bilibili.com/348402900' },
  { label: 'Mail', href: 'mailto:hi@clovu.me' },
] as const

export function IntroSection() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          <ruby lang="en">Clover You<rp>(</rp><rt className="text-muted-foreground">/ˈkloʊvər juː/</rt><rp>)</rp></ruby>
        </h1>
        <p className="text-sm text-muted-foreground">
          Full Stack Dev / <Badge variant="secondary" className="bg-[#e8f4f1] dark:bg-[#13987F]/20 border-[#13987F]/30">HuLa Member</Badge> / Learning is endless
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {SKILLS.map(skill => (
          <Badge key={skill.name} variant="secondary" className={skill.color}>{skill.name}</Badge>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
        {SOCIAL_LINKS.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            className="underline underline-offset-2 hover:text-foreground transition-colors"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  )
}
