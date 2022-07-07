import { z } from 'zod'
import { ConversationWhereInputObjectSchema } from './objects/ConversationWhereInput.schema'
import { ConversationOrderByWithRelationInputObjectSchema } from './objects/ConversationOrderByWithRelationInput.schema'
import { ConversationWhereUniqueInputObjectSchema } from './objects/ConversationWhereUniqueInput.schema'
import { ConversationScalarFieldEnumSchema } from './enums/ConversationScalarFieldEnum.schema'

export const ConversationFindManySchema = z.object({
	where: ConversationWhereInputObjectSchema.optional(),
	orderBy: ConversationOrderByWithRelationInputObjectSchema.optional(),
	cursor: ConversationWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	distinct: z.array(ConversationScalarFieldEnumSchema).optional(),
})
