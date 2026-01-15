export function ShowcaseTypography() {
  return (
    <section className='mx-auto max-w-5xl px-6 space-y-8'>
      <div className='space-y-6'>
        <header>
          <h2 className='text-xl font-semibold'>Typography</h2>
          <p className='text-muted-foreground text-sm'>
            Headings, body text, and inline styles
          </p>
        </header>

        {/* Headings */}
        <div className='space-y-2'>
          <h1 className='text-4xl font-bold'>Heading 1</h1>
          <h2 className='text-3xl font-semibold'>Heading 2</h2>
          <h3 className='text-2xl font-semibold'>Heading 3</h3>
          <h4 className='text-xl font-medium'>Heading 4</h4>
          <h5 className='text-lg font-medium'>Heading 5</h5>
          <h6 className='text-base font-medium'>Heading 6</h6>
        </div>

        {/* Body */}
        <div className='space-y-2 max-w-prose'>
          <p className='text-base'>
            This is default body text. It should be readable at long lengths and
            adapt correctly to light and dark themes.
          </p>

          <p className='text-sm text-muted-foreground'>
            Muted text is used for descriptions, helper labels, and metadata.
          </p>

          <p className='text-sm'>
            Inline <span className='font-medium'>emphasis</span>,{' '}
            <a
              href='#'
              className='text-link underline'
            >
              links
            </a>
            , and{' '}
            <code className='rounded bg-muted px-1 py-0.5 text-xs'>code</code>{' '}
            should all feel cohesive.
          </p>
        </div>
      </div>
    </section>
  )
}
