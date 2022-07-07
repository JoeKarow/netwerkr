import { z } from 'zod'
import { InteractionsWhereInputObjectSchema } from './objects/InteractionsWhereInput.schema'
import { InteractionsOrderByWithRelationInputObjectSchema } from './objects/InteractionsOrderByWithRelationInput.schema'
import { InteractionsWhereUniqueInputObjectSchema } from './objects/InteractionsWhereUniqueInput.schema'

export const InteractionsAggregateSchema = z.object({
	where: InteractionsWhereInputObjectSchema.optional(),
	orderBy: InteractionsOrderByWithRelationInputObjectSchema.optional(),
	cursor: InteractionsWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
})
