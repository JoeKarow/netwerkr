import { z } from 'zod'
import { ConversationWhereInputObjectSchema } from './ConversationWhereInput.schema'

///@ts-ignore
export const ConversationListRelationFilterObjectSchema = z.object({
	every: ConversationWhereInputObjectSchema?.optional(),
	some: ConversationWhereInputObjectSchema?.optional(),
	none: ConversationWhereInputObjectSchema?.optional(),
})
