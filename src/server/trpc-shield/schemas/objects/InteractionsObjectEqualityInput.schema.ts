import { z } from 'zod'
import { InteractionSourceSchema } from '../enums/InteractionSource.schema'
import { ConversationObjectEqualityInputObjectSchema } from './ConversationObjectEqualityInput.schema'

export const InteractionsObjectEqualityInputObjectSchema = z.object({
	source: InteractionSourceSchema,
	time: z.date(),
	content: z.string(),
	extPostId: z.string()?.optional().nullable(),
	conversation: z.array(ConversationObjectEqualityInputObjectSchema),
	createdAt: z.date()?.optional().nullable(),
})
