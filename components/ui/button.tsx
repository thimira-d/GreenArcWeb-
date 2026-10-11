import * as React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-primary-600 text-white hover:bg-primary-700',
      outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50',
      ghost: 'text-primary-600 hover:bg-primary-50',
    }
    const sizes = { sm: 'px-4 py-2 text-sm', md: 'px-6 py-3', lg: 'px-8 py-4 text-lg' }
    return (
      <button ref={ref} className={cn(
        'inline-flex items-center justify-center font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:opacity-50',
        variants[variant], sizes[size], className
      )} {...props} />
    )
  }
)
Button.displayName = 'Button'
export { Button }