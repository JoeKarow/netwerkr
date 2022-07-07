import { z } from 'zod'
import { InteractionSourceSchema } from '../enums/InteractionSource.schema'
import { SocialMediaServiceCreateNestedOneWithoutInteractionsInputObjectSchema } from './SocialMediaServiceCreateNestedOneWithoutInteractionsInput.schema'
import { ConversationCreateNestedManyWithoutInteractionsInputObjectSchema } from './ConversationCreateNestedManyWithoutInteractionsInput.schema'

export const InteractionsCreateWithoutContactInputObjectSchema = z.object({
	id: z.string()?.optional(),
	source: InteractionSourceSchema,
	sourceSocial:
		SocialMediaServiceCreateNestedOneWithoutInteractionsInputObjectSchema?.optional(),
	time: z.date(),
	content: z.string(),
	extPostId: z.string()?.optional().nullable(),
	conversationId:
		ConversationCreateNestedManyWithoutInteractionsInputObjectSchema?.optional(),
	createdAt: z.date()?.optional().nullable(),
	updatedAt: z.date()?.optional().nullable(),
})
