import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

///@ts-ignore
export const ConversationScalarWhereInputObjectSchema = z.object({
	id: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	twitterConvoId: z
		.union([StringNullableFilterObjectSchema, z.string().nullable()])
		?.optional(),
	interactionsId: z
		.union([StringNullableFilterObjectSchema, z.string().nullable()])
		?.optional(),
})
