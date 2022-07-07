import { z } from 'zod'
import { ContactWhereInputObjectSchema } from './objects/ContactWhereInput.schema'
import { ContactOrderByWithRelationInputObjectSchema } from './objects/ContactOrderByWithRelationInput.schema'
import { ContactWhereUniqueInputObjectSchema } from './objects/ContactWhereUniqueInput.schema'

export const ContactAggregateSchema = z.object({
	where: ContactWhereInputObjectSchema.optional(),
	orderBy: ContactOrderByWithRelationInputObjectSchema.optional(),
	cursor: ContactWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
})
