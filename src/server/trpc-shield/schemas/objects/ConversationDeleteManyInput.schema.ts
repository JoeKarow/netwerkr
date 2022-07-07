import { z } from 'zod'
import { ConversationWhereInputObjectSchema } from './ConversationWhereInput.schema'

export const ConversationDeleteManyInputObjectSchema = z.object({
	where: ConversationWhereInputObjectSchema,
})
