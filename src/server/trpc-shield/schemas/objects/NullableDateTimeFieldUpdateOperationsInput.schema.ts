import { z } from 'zod'

export const NullableDateTimeFieldUpdateOperationsInputObjectSchema = z.object({
	set: z.date()?.optional().nullable(),
	unset: z.boolean()?.optional(),
})
