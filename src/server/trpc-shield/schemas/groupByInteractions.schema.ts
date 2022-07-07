import { z } from 'zod'
import { InteractionsWhereInputObjectSchema } from './objects/InteractionsWhereInput.schema'
import { InteractionsOrderByWithAggregationInputObjectSchema } from './objects/InteractionsOrderByWithAggregationInput.schema'
import { InteractionsScalarWhereWithAggregatesInputObjectSchema } from './objects/InteractionsScalarWhereWithAggregatesInput.schema'
import { InteractionsScalarFieldEnumSchema } from './enums/InteractionsScalarFieldEnum.schema'

export const InteractionsGroupBySchema = z.object({
	where: InteractionsWhereInputObjectSchema.optional(),
	orderBy: InteractionsOrderByWithAggregationInputObjectSchema,
	having: InteractionsScalarWhereWithAggregatesInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	by: z.array(InteractionsScalarFieldEnumSchema),
})
