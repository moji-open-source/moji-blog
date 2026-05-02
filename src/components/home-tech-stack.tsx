'use client'

import { Badge } from './ui/badge'
import { TechStackOrbit } from './tech-stack-orbit'
import { Card, CardContent } from './ui/card'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function HomeTechStack() {
  return (
    <Card className="bg-background h-73">
      <CardContent className="relative h-full">
        <div className="flex justify-between items-center z-2 mb-3">
          <h3 className="text-sm font-medium">Tech Stack</h3>
          <Link target="_blank" href="https://gitroll.io/profile/uyjo98ScgNUMC1DOR5FJoDnLUGqt2/stacks" className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
            GirRoll
            <ArrowUpRight size={15} className="remixicon w-3 h-3" aria-label="Open GitRoll" data-label="Open GitRoll" />
          </Link>
        </div>
        <div className="flex items-center justify-center h-full w-full absolute top-0 left-0 z-1 pointer-events-none">
          <TechStackOrbit
            size={250}
            rings={[
              ['TypeScript', 'Java', 'Rust', 'Next.js'],
              ['React', 'Tauri', 'C/C++'],
            ]}
            renderItem={(tech) => (
              <Badge variant="secondary" className="text-xs cursor-default">
                {tech}
              </Badge>
            )}
          />
        </div>
      </CardContent>
    </Card>
  )
}
