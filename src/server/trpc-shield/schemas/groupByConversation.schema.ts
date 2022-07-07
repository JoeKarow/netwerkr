import { z } from 'zod'
import { ConversationWhereInputObjectSchema } from './objects/ConversationWhereInput.schema'
import { ConversationOrderByWithAggregationInputObjectSchema } from './objects/ConversationOrderByWithAggregationInput.schema'
import { ConversationScalarWhereWithAggregatesInputObjectSchema } from './objects/ConversationScalarWhereWithAggregatesInput.schema'
import { ConversationScalarFieldEnumSchema } from './enums/ConversationScalarFieldEnum.schema'

export const ConversationGroupBySchema = z.object({
	where: ConversationWhereInputObjectSchema.optional(),
	orderBy: ConversationOrderByWithAggregationInputObjectSchema,
	having: ConversationScalarWhereWithAggregatesInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	by: z.array(ConversationScalarFieldEnumSchema),
})
