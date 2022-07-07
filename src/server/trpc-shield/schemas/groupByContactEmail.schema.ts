import { z } from 'zod'
import { ContactEmailWhereInputObjectSchema } from './objects/ContactEmailWhereInput.schema'
import { ContactEmailOrderByWithAggregationInputObjectSchema } from './objects/ContactEmailOrderByWithAggregationInput.schema'
import { ContactEmailScalarWhereWithAggregatesInputObjectSchema } from './objects/ContactEmailScalarWhereWithAggregatesInput.schema'
import { ContactEmailScalarFieldEnumSchema } from './enums/ContactEmailScalarFieldEnum.schema'

export const ContactEmailGroupBySchema = z.object({
	where: ContactEmailWhereInputObjectSchema.optional(),
	orderBy: ContactEmailOrderByWithAggregationInputObjectSchema,
	having: ContactEmailScalarWhereWithAggregatesInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	by: z.array(ContactEmailScalarFieldEnumSchema),
})
