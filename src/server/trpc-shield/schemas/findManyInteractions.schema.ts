import { z } from 'zod'
import { InteractionsWhereInputObjectSchema } from './objects/InteractionsWhereInput.schema'
import { InteractionsOrderByWithRelationInputObjectSchema } from './objects/InteractionsOrderByWithRelationInput.schema'
import { InteractionsWhereUniqueInputObjectSchema } from './objects/InteractionsWhereUniqueInput.schema'
import { InteractionsScalarFieldEnumSchema } from './enums/InteractionsScalarFieldEnum.schema'

export const InteractionsFindManySchema = z.object({
	where: InteractionsWhereInputObjectSchema.optional(),
	orderBy: InteractionsOrderByWithRelationInputObjectSchema.optional(),
	cursor: InteractionsWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	distinct: z.array(InteractionsScalarFieldEnumSchema).optional(),
})
