type ColorSwatchProps = {
  name: string
  className: string
  textClassName?: string
}

function ColorSwatch({
  name,
  className,
  textClassName = 'text-foreground',
}: ColorSwatchProps) {
  return (
    <div className='space-y-2'>
      <div className={['h-16 w-full rounded-lg border', className].join(' ')} />
      <p className={`text-sm font-medium ${textClassName}`}>{name}</p>
    </div>
  )
}

export function ShowcaseColors() {
  return (
    <section className='mx-auto max-w-5xl px-6 space-y-8'>
      <div className='space-y-6'>
        <header>
          <h2 className='text-xl font-semibold'>Colors</h2>
          <p className='text-muted-foreground text-sm'>
            Design tokens for surfaces, actions, and states
          </p>
        </header>

        {/* Surface tokens */}
        <div className='space-y-4'>
          <h3 className='text-sm font-semibold uppercase tracking-wide'>
            Surfaces
          </h3>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            <ColorSwatch
              name='background'
              className='bg-background'
            />
            <ColorSwatch
              name='muted'
              className='bg-muted'
            />
            <ColorSwatch
              name='secondary'
              className='bg-secondary'
            />
            <ColorSwatch
              name='card / elevated'
              className='bg-background shadow-sm'
            />
          </div>
        </div>

        {/* Brand / actions */}
        <div className='space-y-4'>
          <h3 className='text-sm font-semibold uppercase tracking-wide'>
            Actions
          </h3>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            <ColorSwatch
              name='primary'
              className='bg-primary'
              textClassName='text-primary-foreground'
            />
            <ColorSwatch
              name='secondary'
              className='bg-secondary'
            />
            <ColorSwatch
              name='link'
              className='bg-background'
              textClassName='text-link underline'
            />
            <ColorSwatch
              name='destructive'
              className='bg-destructive'
              textClassName='text-destructive-foreground'
            />
          </div>
        </div>

        {/* Borders / focus */}
        <div className='space-y-4'>
          <h3 className='text-sm font-semibold uppercase tracking-wide'>
            Utility
          </h3>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            <ColorSwatch
              name='border'
              className='border border-border bg-background'
            />
            <ColorSwatch
              name='ring'
              className='ring-2 ring-ring bg-background'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
