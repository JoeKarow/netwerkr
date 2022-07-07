import { z } from 'zod'
import { InteractionSourceSchema } from '../enums/InteractionSource.schema'

export const InteractionsCreateManySourceSocialInputObjectSchema = z.object({
	id: z.string()?.optional(),
	contactId: z.string(),
	source: InteractionSourceSchema,
	time: z.date(),
	content: z.string(),
	extPostId: z.string()?.optional().nullable(),
	createdAt: z.date()?.optional().nullable(),
	updatedAt: z.date()?.optional().nullable(),
})
