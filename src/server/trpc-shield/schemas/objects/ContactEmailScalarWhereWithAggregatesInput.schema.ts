import { z } from 'zod'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'
import { BoolNullableWithAggregatesFilterObjectSchema } from './BoolNullableWithAggregatesFilter.schema'
import { EnumEmailLabelWithAggregatesFilterObjectSchema } from './EnumEmailLabelWithAggregatesFilter.schema'
import { EmailLabelSchema } from '../enums/EmailLabel.schema'
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

///@ts-ignore
export const ContactEmailScalarWhereWithAggregatesInputObjectSchema = z.object({
	id: z.union([StringWithAggregatesFilterObjectSchema, z.string()])?.optional(),
	email: z
		.union([StringWithAggregatesFilterObjectSchema, z.string()])
		?.optional(),
	primary: z
		.union([
			BoolNullableWithAggregatesFilterObjectSchema,
			z.boolean().nullable(),
		])
		?.optional(),
	label: z
		.union([EnumEmailLabelWithAggregatesFilterObjectSchema, EmailLabelSchema])
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
})
