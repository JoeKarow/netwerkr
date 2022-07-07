import { z } from 'zod'
import { ContactCreateNestedOneWithoutInteractionsInputObjectSchema } from './ContactCreateNestedOneWithoutInteractionsInput.schema'
import { InteractionSourceSchema } from '../enums/InteractionSource.schema'
import { SocialMediaServiceCreateNestedOneWithoutInteractionsInputObjectSchema } from './SocialMediaServiceCreateNestedOneWithoutInteractionsInput.schema'
import { ConversationCreateNestedManyWithoutInteractionsInputObjectSchema } from './ConversationCreateNestedManyWithoutInteractionsInput.schema'

export const InteractionsCreateInputObjectSchema = z.object({
	id: z.string()?.optional(),
	Contact: ContactCreateNestedOneWithoutInteractionsInputObjectSchema,
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
