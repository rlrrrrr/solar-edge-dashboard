import vine from '@vinejs/vine'

export const userSchema = vine.object({
  identifier: vine.string().regex(new RegExp('^[a-zA-Z0-9]+$')),
  password: vine.string().minLength(8),
})

export const passwordSchema = vine.object({
  password: vine.string().minLength(8),
})
