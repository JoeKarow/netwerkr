import { z } from 'zod'
import { ContactCreateNestedOneWithoutInteractionsInputObjectSchema } from './ContactCreateNestedOneWithoutInteractionsInput.schema'
import { InteractionSourceSchema } from '../enums/InteractionSource.schema'
import { SocialMediaServiceCreateNestedOneWithoutInteractionsInputObjectSchema } from './SocialMediaServiceCreateNestedOneWithoutInteractionsInput.schema'

export const InteractionsCreateWithoutConversationIdInputObjectSchema =
	z.object({
		id: z.string()?.optional(),
		Contact: ContactCreateNestedOneWithoutInteractionsInputObjectSchema,
		source: InteractionSourceSchema,
		sourceSocial:
			SocialMediaServiceCreateNestedOneWithoutInteractionsInputObjectSchema?.optional(),
		time: z.date(),
		content: z.string(),
		extPostId: z.string()?.optional().nullable(),
		createdAt: z.date()?.optional().nullable(),
		updatedAt: z.date()?.optional().nullable(),
	})
