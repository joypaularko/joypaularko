'use server'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message: string
  errors?: Partial<Record<'name' | 'email' | 'message', string>>
  values?: { name: string; email: string; message: string }
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const values = {
    name: String(formData.get('name') ?? '').trim(),
    email: String(formData.get('email') ?? '').trim(),
    message: String(formData.get('message') ?? '').trim(),
  }

  const errors: ContactState['errors'] = {}
  if (values.name.length < 2 || values.name.length > 100) {
    errors.name = 'Please enter your name (2–100 characters).'
  }
  if (!EMAIL_PATTERN.test(values.email) || values.email.length > 254) {
    errors.email = 'Please enter a valid email address.'
  }
  if (values.message.length < 10 || values.message.length > 2000) {
    errors.message = 'Message should be between 10 and 2000 characters.'
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: 'error',
      message: 'Please fix the highlighted fields.',
      errors,
      values,
    }
  }

  // Delivery hook: connect an email provider (e.g. Resend) or database here.
  return {
    status: 'success',
    message: `Thanks, ${values.name}! Your message was received — I'll reply within 48 hours.`,
  }
}
