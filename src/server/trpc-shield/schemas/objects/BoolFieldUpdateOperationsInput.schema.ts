import { z } from 'zod'

export const BoolFieldUpdateOperationsInputObjectSchema = z.object({
	set: z.boolean()?.optional(),
})
