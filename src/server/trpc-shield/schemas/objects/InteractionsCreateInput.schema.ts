import { z } from 'zod'
import { InteractionSourceSchema } from '../enums/InteractionSource.schema'
import { ConversationCreateInputObjectSchema } from './ConversationCreateInput.schema'

export const InteractionsCreateInputObjectSchema = z.object({
	source: InteractionSourceSchema,
	time: z.date(),
	content: z.string(),
	extPostId: z.string()?.optional().nullable(),
	conversation: z
		.union([
			ConversationCreateInputObjectSchema,
			z.array(ConversationCreateInputObjectSchema),
		])
		?.optional(),
	createdAt: z.date()?.optional().nullable(),
})
