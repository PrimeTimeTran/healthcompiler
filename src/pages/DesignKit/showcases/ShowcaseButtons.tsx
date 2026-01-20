import { Button } from '@/components/ui/button'

const VARIANTS = [
  'primary',
  'secondary',
  'ghost',
  'destructive',
  'link',
  'outline',
] as const

const SIZES = ['sm', 'md', 'lg'] as const

export function ShowcaseButtons() {
  return (
    <section className='mx-auto max-w-5xl px-6 space-y-8'>
      <div className='space-y-6'>
        <header>
          <h2 className='text-xl font-semibold'>Buttons</h2>
          <p className='text-sm text-muted-foreground'>
            Variants, sizes, and states
          </p>
        </header>
        {VARIANTS.map((variant) => (
          <div
            key={variant}
            className='space-y-3'
          >
            <h3 className='text-sm font-medium capitalize'>{variant}</h3>

            <div className='flex flex-wrap gap-3'>
              {SIZES.map((size) => (
                <Button
                  key={size}
                  variant={variant}
                  size={size}
                >
                  {variant} / {size}
                </Button>
              ))}

              <Button
                variant={variant}
                disabled
              >
                Disabled
              </Button>

              <Button
                variant={variant}
                disabled
              >
                Loading...
              </Button>
            </div>
          </div>
        ))}
      </div>
      <hr />
    </section>
  )
}
