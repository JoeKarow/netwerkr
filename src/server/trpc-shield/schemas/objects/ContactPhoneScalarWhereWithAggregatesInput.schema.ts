import { z } from 'zod'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'
import { EnumPhoneLabelWithAggregatesFilterObjectSchema } from './EnumPhoneLabelWithAggregatesFilter.schema'
import { PhoneLabelSchema } from '../enums/PhoneLabel.schema'
import { BoolNullableWithAggregatesFilterObjectSchema } from './BoolNullableWithAggregatesFilter.schema'
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

///@ts-ignore
export const ContactPhoneScalarWhereWithAggregatesInputObjectSchema = z.object({
	id: z.union([StringWithAggregatesFilterObjectSchema, z.string()])?.optional(),
	number: z
		.union([StringWithAggregatesFilterObjectSchema, z.string()])
		?.optional(),
	label: z
		.union([EnumPhoneLabelWithAggregatesFilterObjectSchema, PhoneLabelSchema])
		?.optional(),
	primary: z
		.union([
			BoolNullableWithAggregatesFilterObjectSchema,
			z.boolean().nullable(),
		])
		?.optional(),
	contactId: z
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
