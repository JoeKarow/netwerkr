import { z } from 'zod'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'
import { EnumInteractionSourceWithAggregatesFilterObjectSchema } from './EnumInteractionSourceWithAggregatesFilter.schema'
import { InteractionSourceSchema } from '../enums/InteractionSource.schema'
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

///@ts-ignore
export const InteractionsScalarWhereWithAggregatesInputObjectSchema = z.object({
	id: z.union([StringWithAggregatesFilterObjectSchema, z.string()])?.optional(),
	contactId: z
		.union([StringWithAggregatesFilterObjectSchema, z.string()])
		?.optional(),
	source: z
		.union([
			EnumInteractionSourceWithAggregatesFilterObjectSchema,
			InteractionSourceSchema,
		])
		?.optional(),
	time: z
		.union([DateTimeWithAggregatesFilterObjectSchema, z.date()])
		?.optional(),
	content: z
		.union([StringWithAggregatesFilterObjectSchema, z.string()])
		?.optional(),
	extPostId: z
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
	socialMediaServiceId: z
		.union([
			StringNullableWithAggregatesFilterObjectSchema,
			z.string().nullable(),
		])
		?.optional(),
})
