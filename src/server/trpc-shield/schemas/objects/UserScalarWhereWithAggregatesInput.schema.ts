import { z } from 'zod'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'
import { EnumRoleWithAggregatesFilterObjectSchema } from './EnumRoleWithAggregatesFilter.schema'
import { RoleSchema } from '../enums/Role.schema'
import { BoolNullableWithAggregatesFilterObjectSchema } from './BoolNullableWithAggregatesFilter.schema'

///@ts-ignore
export const UserScalarWhereWithAggregatesInputObjectSchema = z.object({
	id: z.union([StringWithAggregatesFilterObjectSchema, z.string()])?.optional(),
	name: z
		.union([
			StringNullableWithAggregatesFilterObjectSchema,
			z.string().nullable(),
		])
		?.optional(),
	email: z
		.union([
			StringNullableWithAggregatesFilterObjectSchema,
			z.string().nullable(),
		])
		?.optional(),
	emailVerified: z
		.union([
			DateTimeNullableWithAggregatesFilterObjectSchema,
			z.date().nullable(),
		])
		?.optional(),
	image: z
		.union([
			StringNullableWithAggregatesFilterObjectSchema,
			z.string().nullable(),
		])
		?.optional(),
	twitterList: z
		.union([
			StringNullableWithAggregatesFilterObjectSchema,
			z.string().nullable(),
		])
		?.optional(),
	role: z
		.union([EnumRoleWithAggregatesFilterObjectSchema, RoleSchema])
		?.optional(),
	disabled: z
		.union([
			BoolNullableWithAggregatesFilterObjectSchema,
			z.boolean().nullable(),
		])
		?.optional(),
	profileId: z
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
