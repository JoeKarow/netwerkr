import { z } from 'zod'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema'
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

///@ts-ignore
export const ContactScalarWhereWithAggregatesInputObjectSchema = z.object({
	id: z.union([StringWithAggregatesFilterObjectSchema, z.string()])?.optional(),
	firstName: z
		.union([
			StringNullableWithAggregatesFilterObjectSchema,
			z.string().nullable(),
		])
		?.optional(),
	lastName: z
		.union([
			StringNullableWithAggregatesFilterObjectSchema,
			z.string().nullable(),
		])
		?.optional(),
	photo: z
		.union([StringWithAggregatesFilterObjectSchema, z.string()])
		?.optional(),
	onTwitterList: z
		.union([BoolWithAggregatesFilterObjectSchema, z.boolean()])
		?.optional(),
	associatedUserId: z
		.union([StringWithAggregatesFilterObjectSchema, z.string()])
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
