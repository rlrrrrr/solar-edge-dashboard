import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export const adminSchema = vine.object({
  identifier: vine.string().regex(new RegExp('^[a-zA-Z0-9]+$')),
  password: vine.string().minLength(8),
})


