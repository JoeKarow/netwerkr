import { z } from 'zod'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

///@ts-ignore
export const ConversationWhereInputObjectSchema = z.object({
	twitterConvoId: z
		.union([StringNullableFilterObjectSchema, z.string().nullable()])
		?.optional(),
})
