type BadgeProps = {
  label: string
  className: string
}

function Badge({ label, className }: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
        className,
      ].join(' ')}
    >
      {label}
    </span>
  )
}

export function ShowcaseBadges() {
  return (
    <section className='mx-auto max-w-5xl px-6 space-y-8'>
      <div className='space-y-6'>
        <header>
          <h2 className='text-xl font-semibold'>Badges & Status</h2>
          <p className='text-sm text-muted-foreground'>
            Semantic status indicators and pills
          </p>
        </header>

        {/* Neutral */}
        <div className='space-y-3'>
          <h3 className='text-sm font-semibold uppercase tracking-wide'>
            Neutral
          </h3>

          <div className='flex flex-wrap gap-3'>
            <Badge
              label='Default'
              className='bg-muted text-muted-foreground'
            />
            <Badge
              label='Outline'
              className='border border-border text-foreground'
            />
            <Badge
              label='Ghost'
              className='text-foreground'
            />
          </div>
        </div>

        {/* Brand */}
        <div className='space-y-3'>
          <h3 className='text-sm font-semibold uppercase tracking-wide'>
            Brand
          </h3>

          <div className='flex flex-wrap gap-3'>
            <Badge
              label='Primary'
              className='bg-primary text-primary-foreground'
            />
            <Badge
              label='Primary soft'
              className='bg-primary/15 text-primary'
            />
          </div>
        </div>

        {/* Semantic */}
        <div className='space-y-3'>
          <h3 className='text-sm font-semibold uppercase tracking-wide'>
            Semantic
          </h3>

          <div className='flex flex-wrap gap-3'>
            <Badge
              label='Success'
              className='bg-[hsl(var(--success))] text-[hsl(var(--success-foreground))]'
            />
            <Badge
              label='Warning'
              className='bg-[hsl(var(--warning))] text-[hsl(var(--warning-foreground))]'
            />
            <Badge
              label='Error'
              className='bg-destructive text-destructive-foreground'
            />
            <Badge
              label='Info'
              className='bg-[hsl(var(--info))] text-[hsl(var(--info-foreground))]'
            />
          </div>
        </div>

        {/* Subtle / outline semantic */}
        <div className='space-y-3'>
          <h3 className='text-sm font-semibold uppercase tracking-wide'>
            Subtle
          </h3>

          <div className='flex flex-wrap gap-3'>
            <Badge
              label='Success'
              className='bg-[hsl(var(--success)/0.15)] text-[hsl(var(--success))]'
            />
            <Badge
              label='Warning'
              className='bg-[hsl(var(--warning)/0.15)] text-[hsl(var(--warning))]'
            />
            <Badge
              label='Error'
              className='bg-destructive/15 text-destructive'
            />
            <Badge
              label='Info'
              className='bg-[hsl(var(--info)/0.15)] text-[hsl(var(--info))]'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
