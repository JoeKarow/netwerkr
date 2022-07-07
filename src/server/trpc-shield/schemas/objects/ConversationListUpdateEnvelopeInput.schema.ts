import { z } from 'zod'
import { ConversationCreateInputObjectSchema } from './ConversationCreateInput.schema'
import { ConversationUpdateManyInputObjectSchema } from './ConversationUpdateManyInput.schema'
import { ConversationDeleteManyInputObjectSchema } from './ConversationDeleteManyInput.schema'

export const ConversationListUpdateEnvelopeInputObjectSchema = z.object({
	set: z
		.union([
			ConversationCreateInputObjectSchema,
			z.array(ConversationCreateInputObjectSchema),
		])
		?.optional(),
	push: z
		.union([
			ConversationCreateInputObjectSchema,
			z.array(ConversationCreateInputObjectSchema),
		])
		?.optional(),
	updateMany: ConversationUpdateManyInputObjectSchema?.optional(),
	deleteMany: ConversationDeleteManyInputObjectSchema?.optional(),
})
