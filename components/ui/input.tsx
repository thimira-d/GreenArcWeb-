import * as React from 'react'
import { cn } from '@/lib/utils'

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input ref={ref} className={cn(
      'flex h-12 w-full rounded-lg border border-gray-300 px-4 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500',
      className
    )} {...props} />
  )
)
Input.displayName = 'Input'

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea ref={ref} className={cn(
      'flex min-h-[120px] w-full rounded-lg border border-gray-300 px-4 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none',
      className
    )} {...props} />
  )
)
Textarea.displayName = 'Textarea'

export { Input, Textarea }