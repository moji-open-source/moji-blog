import { cn } from '@/lib/utils'

export function SectionHeading({ children, className, ...props }: React.ComponentProps<'h2'>) {
  return (
    <div className={cn(
      'flex items-center justify-between mb-4',
      className,
    )}>
      <h2
        className={cn(
          'flex-1 border-b border-border pb-2',
          'text-[0.75rem] leading-4 font-medium uppercase tracking-widest text-muted-foreground',
        )}
        {...props}
      >
        {children}
      </h2>
    </div>
  )
}
