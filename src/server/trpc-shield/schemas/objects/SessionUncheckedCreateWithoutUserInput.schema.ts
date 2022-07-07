import { z } from 'zod'

export const SessionUncheckedCreateWithoutUserInputObjectSchema = z.object({
	id: z.string()?.optional(),
	sessionToken: z.string(),
	expires: z.date(),
})
