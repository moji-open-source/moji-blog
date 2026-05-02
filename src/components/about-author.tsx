import { Badge } from './ui/badge'
import { Card, CardContent } from './ui/card'

function TimelineBadge({ year, children }: { year: string; children: React.ReactNode }) {
  return (
        <Badge variant="outline" className="text-muted-foreground text-xs font-normal">
            <span className="font-medium text-foreground/70">{year}</span>
            {children}
        </Badge>
  )
}

export function AboutAuthor() {
  return (
        <Card className="bg-background h-73">
            <CardContent>
                <h3 className="text-sm font-medium mb-3">About Me</h3>
                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed mb-4">
                    <p>
                        Hi, I'm Clover — a full-stack developer based in Guangzhou, China.
                        I work with TypeScript, Java, and I'm currently learning Rust and building things with it.
                    </p>
                    <p>
                        Outside of code, I enjoy chill music — lo-fi, ambient, anything mellow.
                        I'm also a Genshin Impact player and an occasional reader.
                    </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                    <TimelineBadge year="'17">C# / Web</TimelineBadge>
                    <TimelineBadge year="'18">Full Stack</TimelineBadge>
                    <TimelineBadge year="'19">TypeScript / React</TimelineBadge>
                    <TimelineBadge year="'20">Java / Vue</TimelineBadge>
                    <TimelineBadge year="'23">Rust / Rust</TimelineBadge>
                    <TimelineBadge year="'26">C/C++</TimelineBadge>
                </div>
            </CardContent>
        </Card>
  )
}

