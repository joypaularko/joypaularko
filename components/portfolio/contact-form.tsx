'use client'

import { useActionState } from 'react'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { submitContact, type ContactState } from '@/app/actions'

const initialState: ContactState = { status: 'idle', message: '' }

const fieldClass =
  'w-full rounded-lg border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 aria-invalid:border-destructive'

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState,
  )

  if (state.status === 'success') {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-4 rounded-2xl border border-primary/30 bg-card p-8 shadow-[0_0_48px_-20px] shadow-primary/60"
      >
        <CheckCircle2 aria-hidden="true" className="size-8 text-primary" />
        <p className="text-lg font-semibold">Message sent</p>
        <p className="leading-relaxed text-muted-foreground">{state.message}</p>
      </div>
    )
  }

  const errors = state.errors ?? {}

  return (
    <form
      action={formAction}
      noValidate
      className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Ada Lovelace"
            defaultValue={state.values?.name}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={fieldClass}
          />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="ada@example.com"
            defaultValue={state.values?.email}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={fieldClass}
          />
        </Field>
      </div>
      <Field id="message" label="Message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Tell me about your project, dataset, or role..."
          defaultValue={state.values?.message}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`${fieldClass} resize-y`}
        />
      </Field>

      {state.status === 'error' && (
        <p role="alert" className="text-sm text-destructive">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_24px_-6px] shadow-primary/60 transition-all hover:shadow-[0_0_36px_-4px] hover:shadow-primary/70 disabled:cursor-not-allowed disabled:opacity-70 sm:w-fit"
      >
        {pending ? (
          <Loader2 aria-hidden="true" className="size-4 animate-spin" />
        ) : (
          <Send aria-hidden="true" className="size-4" />
        )}
        {pending ? 'Sending...' : 'Send message'}
      </button>
    </form>
  )
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-mono text-xs text-muted-foreground">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}
