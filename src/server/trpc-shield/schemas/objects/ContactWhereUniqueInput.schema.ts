import { z } from 'zod'

export const ContactWhereUniqueInputObjectSchema = z.object({
	id: z.string()?.optional(),
})
