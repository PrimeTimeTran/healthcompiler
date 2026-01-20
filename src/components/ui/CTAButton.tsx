import * as React from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

type CTAButtonProps = {
  text: string
  link?: string
  iconPrefix?: React.ReactNode
  iconSuffix?: React.ReactNode
  suffixIconDefault?: boolean
  prefixIconDefault?: boolean
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'lg' | 'md'
  className?: string
  onClick?: () => void
}

/**
 * CTAButton
 * - Renders a Link when `link` is provided
 * - Renders a button otherwise
 * - Single source of truth for all CTA buttons
 */
const CTAButton = ({
  text,
  link,
  iconPrefix,
  iconSuffix,
  variant = 'primary',
  size = 'lg',
  className,
  onClick,
  suffixIconDefault,
}: CTAButtonProps) => {
  const content = (
    <span className='inline-flex items-center gap-2'>
      {iconPrefix}
      {text}
      {iconSuffix}
      {suffixIconDefault && (
        <ArrowRight className='ml-2 transition-transform group-hover:translate-x-1' />
      )}
    </span>
  )

  const classes = cn(buttonVariants({ variant, size }), className)

  // ✅ Navigation case
  if (link) {
    return (
      <Link
        to={link}
        className={classes}
      >
        {content}
      </Link>
    )
  }

  // ✅ Action case
  return (
    <button
      type='button'
      className={classes}
      onClick={onClick}
    >
      {content}
    </button>
  )
}

export default CTAButton
