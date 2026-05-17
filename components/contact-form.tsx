'use client'
import { useState } from 'react'
import { Button } from './ui/button'
import { Input, Textarea } from './ui/input'
import { Send, CheckCircle, Loader2 } from 'lucide-react'

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<any>({})

  const validate = (fd: FormData) => {
    const e: any = {}
    const name = fd.get('name') as string, email = fd.get('email') as string, message = fd.get('message') as string
    if (!name || name.length < 2) e.name = 'Name too short'
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Invalid email'
    if (!message || message.length < 10) e.message = 'Message too short'
    return e
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const errs = validate(fd)
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({}); setSubmitting(true)
    await new Promise(r => setTimeout(r, 1500))
    setSubmitting(false); setSubmitted(true)
  }

  if (submitted) return (
    <div className="flex flex-col items-center justify-center rounded-2xl bg-primary-50 p-12 text-center">
      <CheckCircle className="mb-4 h-16 w-16 text-primary-600" />
      <h3 className="text-2xl font-bold">Message Sent!</h3>
      <p className="mt-2 text-gray-600">We'll get back to you within 24 hours.</p>
      <Button variant="outline" className="mt-6" onClick={() => setSubmitted(false)}>Send Another</Button>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
        <Input name="name" placeholder="John Doe" className={errors.name ? 'border-red-500' : ''} />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
        <Input name="email" type="email" placeholder="john@example.com" className={errors.email ? 'border-red-500' : ''} />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
        <Textarea name="message" placeholder="Tell us about your project..." className={errors.message ? 'border-red-500' : ''} />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
      </div>
      <Button type="submit" size="lg" className="w-full gap-2" disabled={submitting}>
        {submitting ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</> : <><Send className="h-4 w-4" /> Send Message</>}
      </Button>
    </form>
  )
}