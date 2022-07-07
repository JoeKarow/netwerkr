import { z } from 'zod'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'
import { IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema'
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

///@ts-ignore
export const AccountScalarWhereWithAggregatesInputObjectSchema = z.object({
	id: z.union([StringWithAggregatesFilterObjectSchema, z.string()])?.optional(),
	userId: z
		.union([StringWithAggregatesFilterObjectSchema, z.string()])
		?.optional(),
	type: z
		.union([StringWithAggregatesFilterObjectSchema, z.string()])
		?.optional(),
	provider: z
		.union([StringWithAggregatesFilterObjectSchema, z.string()])
		?.optional(),
	providerAccountId: z
		.union([StringWithAggregatesFilterObjectSchema, z.string()])
		?.optional(),
	refresh_token: z
		.union([
			StringNullableWithAggregatesFilterObjectSchema,
			z.string().nullable(),
		])
		?.optional(),
	access_token: z
		.union([
			StringNullableWithAggregatesFilterObjectSchema,
			z.string().nullable(),
		])
		?.optional(),
	expires_at: z
		.union([IntNullableWithAggregatesFilterObjectSchema, z.number().nullable()])
		?.optional(),
	token_type: z
		.union([
			StringNullableWithAggregatesFilterObjectSchema,
			z.string().nullable(),
		])
		?.optional(),
	scope: z
		.union([
			StringNullableWithAggregatesFilterObjectSchema,
			z.string().nullable(),
		])
		?.optional(),
	id_token: z
		.union([
			StringNullableWithAggregatesFilterObjectSchema,
			z.string().nullable(),
		])
		?.optional(),
	session_state: z
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
})
