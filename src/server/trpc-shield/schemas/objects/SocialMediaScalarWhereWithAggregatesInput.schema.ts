import { z } from 'zod'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema'
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

///@ts-ignore
export const SocialMediaScalarWhereWithAggregatesInputObjectSchema = z.object({
	id: z.union([StringWithAggregatesFilterObjectSchema, z.string()])?.optional(),
	userId: z
		.union([StringWithAggregatesFilterObjectSchema, z.string()])
		?.optional(),
	displayName: z
		.union([StringWithAggregatesFilterObjectSchema, z.string()])
		?.optional(),
	username: z
		.union([StringWithAggregatesFilterObjectSchema, z.string()])
		?.optional(),
	protected: z
		.union([BoolWithAggregatesFilterObjectSchema, z.boolean()])
		?.optional(),
	profileImg: z
		.union([
			StringNullableWithAggregatesFilterObjectSchema,
			z.string().nullable(),
		])
		?.optional(),
	createdAt: z
		.union([
			DateTimeNullableWithAggregatesFilterObjectSchema,
			z.date().nullable(),
		])
		?.optional(),
	updatedAt: z
		.union([
			DateTimeNullableWithAggregatesFilterObjectSchema,
			z.date().nullable(),
		])
		?.optional(),
	contactId: z
		.union([StringWithAggregatesFilterObjectSchema, z.string()])
		?.optional(),
	socialMediaServiceId: z
		.union([StringWithAggregatesFilterObjectSchema, z.string()])
		?.optional(),
})
