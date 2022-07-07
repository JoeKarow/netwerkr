import { z } from 'zod'

export const SessionUncheckedCreateInputObjectSchema = z.object({
	id: z.string()?.optional(),
	sessionToken: z.string(),
	userId: z.string(),
	expires: z.date(),
})
