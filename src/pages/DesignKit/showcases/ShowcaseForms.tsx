function Field({
  label,
  children,
  description,
  error,
}: {
  label: string
  children: React.ReactNode
  description?: string
  error?: string
}) {
  return (
    <div className='space-y-1.5'>
      <label className='text-sm font-medium'>{label}</label>

      {children}

      {description && !error && (
        <p className='text-xs text-muted-foreground'>{description}</p>
      )}

      {error && <p className='text-xs text-destructive'>{error}</p>}
    </div>
  )
}

export function ShowcaseForms() {
  return (
    <section className='mx-auto max-w-5xl px-6 space-y-8'>
      <div className='space-y-6'>
        <header>
          <h2 className='text-xl font-semibold'>Forms</h2>
          <p className='text-sm text-muted-foreground'>
            Inputs, states, focus, and validation
          </p>
        </header>

        <div className='grid gap-6 max-w-xl'>
          {/* Text input */}
          <Field
            label='Text input'
            description='Normal input state'
          >
            <input
              type='text'
              placeholder='Enter text'
              className='
              h-10 w-full rounded-md border border-border
              bg-background px-3 text-sm text-foreground
              placeholder:text-muted-foreground
              focus:outline-none focus:ring-2 focus:ring-ring
            '
            />
          </Field>

          {/* Email input */}
          <Field label='Email'>
            <input
              type='email'
              placeholder='you@example.com'
              className='
              h-10 w-full rounded-md border border-border
              bg-background px-3 text-sm text-foreground
              placeholder:text-muted-foreground
              focus:outline-none focus:ring-2 focus:ring-ring
            '
            />
          </Field>

          {/* Select */}
          <Field label='Select'>
            <select
              className='
              h-10 w-full rounded-md border border-border
              bg-background px-3 text-sm text-foreground
              focus:outline-none focus:ring-2 focus:ring-ring
            '
            >
              <option>Option one</option>
              <option>Option two</option>
              <option>Option three</option>
            </select>
          </Field>

          {/* Textarea */}
          <Field label='Textarea'>
            <textarea
              rows={4}
              placeholder='Write something...'
              className='
              w-full rounded-md border border-border
              bg-background px-3 py-2 text-sm text-foreground
              placeholder:text-muted-foreground
              focus:outline-none focus:ring-2 focus:ring-ring
            '
            />
          </Field>

          {/* Error state */}
          <Field
            label='With error'
            error='This field is required'
          >
            <input
              type='text'
              className='
              h-10 w-full rounded-md border border-destructive
              bg-background px-3 text-sm text-foreground
              placeholder:text-muted-foreground
              focus:outline-none focus:ring-2 focus:ring-destructive
            '
            />
          </Field>

          {/* Disabled */}
          <Field label='Disabled'>
            <input
              type='text'
              disabled
              placeholder='Disabled input'
              className='
              h-10 w-full rounded-md border border-border
              bg-muted px-3 text-sm text-muted-foreground
              cursor-not-allowed
            '
            />
          </Field>

          {/* Checkbox & radio */}
          <div className='space-y-3'>
            <label className='flex items-center gap-2 text-sm'>
              <input
                type='checkbox'
                className='
                h-4 w-4 rounded border-border
                accent-primary
              '
              />
              Checkbox
            </label>

            <label className='flex items-center gap-2 text-sm'>
              <input
                type='radio'
                name='radio'
                className='accent-primary'
              />
              Radio
            </label>
          </div>
        </div>
      </div>
    </section>
  )
}
