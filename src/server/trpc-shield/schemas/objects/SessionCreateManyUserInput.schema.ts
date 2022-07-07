import { z } from 'zod'

export const SessionCreateManyUserInputObjectSchema = z.object({
	id: z.string()?.optional(),
	sessionToken: z.string(),
	expires: z.date(),
})
