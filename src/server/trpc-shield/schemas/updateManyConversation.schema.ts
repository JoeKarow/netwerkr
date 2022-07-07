import { z } from 'zod'
import { ConversationUpdateManyMutationInputObjectSchema } from './objects/ConversationUpdateManyMutationInput.schema'
import { ConversationWhereInputObjectSchema } from './objects/ConversationWhereInput.schema'

export const ConversationUpdateManySchema = z.object({
	data: ConversationUpdateManyMutationInputObjectSchema,
	where: ConversationWhereInputObjectSchema.optional(),
})
