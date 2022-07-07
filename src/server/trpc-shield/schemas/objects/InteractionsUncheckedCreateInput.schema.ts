import { z } from 'zod'
import { InteractionSourceSchema } from '../enums/InteractionSource.schema'
import { ConversationUncheckedCreateNestedManyWithoutInteractionsInputObjectSchema } from './ConversationUncheckedCreateNestedManyWithoutInteractionsInput.schema'

export const InteractionsUncheckedCreateInputObjectSchema = z.object({
	id: z.string()?.optional(),
	contactId: z.string(),
	source: InteractionSourceSchema,
	time: z.date(),
	content: z.string(),
	extPostId: z.string()?.optional().nullable(),
	conversationId:
		ConversationUncheckedCreateNestedManyWithoutInteractionsInputObjectSchema?.optional(),
	createdAt: z.date()?.optional().nullable(),
	updatedAt: z.date()?.optional().nullable(),
	socialMediaServiceId: z.string()?.optional().nullable(),
})
