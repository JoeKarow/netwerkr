import { z } from 'zod'

export const NullableBoolFieldUpdateOperationsInputObjectSchema = z.object({
	set: z.boolean()?.optional().nullable(),
	unset: z.boolean()?.optional(),
})
