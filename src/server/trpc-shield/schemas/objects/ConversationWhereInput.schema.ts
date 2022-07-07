import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { InteractionsRelationFilterObjectSchema } from './InteractionsRelationFilter.schema'
import { InteractionsWhereInputObjectSchema } from './InteractionsWhereInput.schema'

///@ts-ignore
export const ConversationWhereInputObjectSchema = z.object({
	id: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	twitterConvoId: z
		.union([StringNullableFilterObjectSchema, z.string().nullable()])
		?.optional(),
	Interactions: z
		.union([
			InteractionsRelationFilterObjectSchema,
			InteractionsWhereInputObjectSchema.nullable(),
		])
		?.optional(),
	interactionsId: z
		.union([StringNullableFilterObjectSchema, z.string().nullable()])
		?.optional(),
})
