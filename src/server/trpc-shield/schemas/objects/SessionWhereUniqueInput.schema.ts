import { z } from 'zod'

export const SessionWhereUniqueInputObjectSchema = z.object({
	id: z.string()?.optional(),
	sessionToken: z.string()?.optional(),
})
