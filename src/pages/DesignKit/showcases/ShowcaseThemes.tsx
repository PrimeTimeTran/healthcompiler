import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { THEMES, setTheme } from '@/themes/theme'
import { Button } from '@/components/ui/button'

export function ShowcaseThemes() {
  const { theme, setTheme: setThemeBlah, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  useEffect(() => {
    const html = document.documentElement
    html.dataset.palette = 'new'
    html.dataset.theme = 'ocean'

    return () => {
      delete html.dataset.palette
      delete html.dataset.theme
    }
  }, [])

  if (!mounted) return null

  const currentTheme = theme === 'system' ? systemTheme : theme
  return (
    <section className='mx-auto max-w-5xl px-6 py-6'>
      <div
        className='
    flex flex-col gap-6
    md:flex-row md:items-center md:justify-between
    rounded-xl border border-border
    bg-background/80 backdrop-blur
    p-4
  '
      >
        <div className='flex items-center gap-4'>
          <h2 className='text-sm font-semibold text-muted-foreground uppercase tracking-wide'>
            Mode
          </h2>

          <Button
            variant='outline'
            size='lg'
            onClick={() =>
              setThemeBlah(currentTheme === 'dark' ? 'light' : 'dark')
            }
          >
            {currentTheme === 'dark' ? 'Light ☀️' : 'Dark 🌙'}
          </Button>
        </div>

        <div className='hidden md:block h-10 w-px bg-border' />

        <div className='flex flex-col gap-3 md:flex-row md:items-center'>
          <h2 className='text-sm font-semibold text-muted-foreground uppercase tracking-wide'>
            Theme
          </h2>

          <div className='flex gap-2 flex-wrap'>
            {THEMES.map((theme) => (
              <Button
                key={theme}
                size='lg'
                variant={theme === currentTheme ? 'primary' : 'outline'}
                onClick={() => setTheme(theme)}
              >
                {theme}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
