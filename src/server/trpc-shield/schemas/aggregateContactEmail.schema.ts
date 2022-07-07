import { z } from 'zod'
import { ContactEmailWhereInputObjectSchema } from './objects/ContactEmailWhereInput.schema'
import { ContactEmailOrderByWithRelationInputObjectSchema } from './objects/ContactEmailOrderByWithRelationInput.schema'
import { ContactEmailWhereUniqueInputObjectSchema } from './objects/ContactEmailWhereUniqueInput.schema'

export const ContactEmailAggregateSchema = z.object({
	where: ContactEmailWhereInputObjectSchema.optional(),
	orderBy: ContactEmailOrderByWithRelationInputObjectSchema.optional(),
	cursor: ContactEmailWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
})
