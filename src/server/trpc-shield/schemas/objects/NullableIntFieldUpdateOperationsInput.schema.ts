import { z } from 'zod'

export const NullableIntFieldUpdateOperationsInputObjectSchema = z.object({
	set: z.number()?.optional().nullable(),
	increment: z.number()?.optional(),
	decrement: z.number()?.optional(),
	multiply: z.number()?.optional(),
	divide: z.number()?.optional(),
	unset: z.boolean()?.optional(),
})
