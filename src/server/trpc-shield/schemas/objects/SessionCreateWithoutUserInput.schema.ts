import { z } from 'zod'

export const SessionCreateWithoutUserInputObjectSchema = z.object({
	id: z.string()?.optional(),
	sessionToken: z.string(),
	expires: z.date(),
})
