import { z } from 'zod'

export const SessionCreateManyInputObjectSchema = z.object({
	id: z.string()?.optional(),
	sessionToken: z.string(),
	userId: z.string(),
	expires: z.date(),
})
