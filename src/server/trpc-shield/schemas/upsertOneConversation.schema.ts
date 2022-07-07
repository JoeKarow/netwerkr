import { z } from 'zod'
import { ConversationWhereUniqueInputObjectSchema } from './objects/ConversationWhereUniqueInput.schema'
import { ConversationCreateInputObjectSchema } from './objects/ConversationCreateInput.schema'
import { ConversationUpdateInputObjectSchema } from './objects/ConversationUpdateInput.schema'

export const ConversationUpsertSchema = z.object({
	where: ConversationWhereUniqueInputObjectSchema,
	create: ConversationCreateInputObjectSchema,
	update: ConversationUpdateInputObjectSchema,
})
