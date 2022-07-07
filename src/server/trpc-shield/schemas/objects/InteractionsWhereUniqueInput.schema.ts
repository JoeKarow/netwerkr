import { z } from 'zod'

export const InteractionsWhereUniqueInputObjectSchema = z.object({
	id: z.string()?.optional(),
})
