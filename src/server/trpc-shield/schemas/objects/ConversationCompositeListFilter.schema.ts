import { z } from 'zod'
import { ConversationObjectEqualityInputObjectSchema } from './ConversationObjectEqualityInput.schema'
import { ConversationWhereInputObjectSchema } from './ConversationWhereInput.schema'

///@ts-ignore
export const ConversationCompositeListFilterObjectSchema = z.object({
	equals: z.array(ConversationObjectEqualityInputObjectSchema),
	every: ConversationWhereInputObjectSchema?.optional(),
	some: ConversationWhereInputObjectSchema?.optional(),
	none: ConversationWhereInputObjectSchema?.optional(),
	isEmpty: z.boolean()?.optional(),
	isSet: z.boolean()?.optional(),
})
