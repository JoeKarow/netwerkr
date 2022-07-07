import { z } from 'zod'

export const UserWhereUniqueInputObjectSchema = z.object({
	id: z.string()?.optional(),
	email: z.string()?.optional(),
	profileId: z.string()?.optional(),
})
