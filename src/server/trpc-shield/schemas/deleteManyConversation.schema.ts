import { z } from 'zod'
import { ConversationWhereInputObjectSchema } from './objects/ConversationWhereInput.schema'

export const ConversationDeleteManySchema = z.object({
	where: ConversationWhereInputObjectSchema.optional(),
})
