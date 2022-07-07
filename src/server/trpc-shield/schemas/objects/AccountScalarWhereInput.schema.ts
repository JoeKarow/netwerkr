import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

///@ts-ignore
export const AccountScalarWhereInputObjectSchema = z.object({
	id: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	userId: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	type: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	provider: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	providerAccountId: z
		.union([StringFilterObjectSchema, z.string()])
		?.optional(),
	refresh_token: z
		.union([StringNullableFilterObjectSchema, z.string().nullable()])
		?.optional(),
	access_token: z
		.union([StringNullableFilterObjectSchema, z.string().nullable()])
		?.optional(),
	expires_at: z
		.union([IntNullableFilterObjectSchema, z.number().nullable()])
		?.optional(),
	token_type: z
		.union([StringNullableFilterObjectSchema, z.string().nullable()])
		?.optional(),
	scope: z
		.union([StringNullableFilterObjectSchema, z.string().nullable()])
		?.optional(),
	id_token: z
		.union([StringNullableFilterObjectSchema, z.string().nullable()])
		?.optional(),
	session_state: z
		.union([StringNullableFilterObjectSchema, z.string().nullable()])
		?.optional(),
	createdAt: z
		.union([DateTimeNullableFilterObjectSchema, z.date().nullable()])
		?.optional(),
	updatedAt: z
		.union([DateTimeNullableFilterObjectSchema, z.date().nullable()])
		?.optional(),
})
