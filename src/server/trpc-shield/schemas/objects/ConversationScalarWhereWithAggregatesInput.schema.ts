import { z } from 'zod'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

///@ts-ignore
export const ConversationScalarWhereWithAggregatesInputObjectSchema = z.object({
	id: z.union([StringWithAggregatesFilterObjectSchema, z.string()])?.optional(),
	twitterConvoId: z
		.union([
			StringNullableWithAggregatesFilterObjectSchema,
			z.string().nullable(),
		])
		?.optional(),
	interactionsId: z
		.union([
			StringNullableWithAggregatesFilterObjectSchema,
			z.string().nullable(),
		])
		?.optional(),
})
