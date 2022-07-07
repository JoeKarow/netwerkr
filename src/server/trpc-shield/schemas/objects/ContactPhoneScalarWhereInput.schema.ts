import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { EnumPhoneLabelFilterObjectSchema } from './EnumPhoneLabelFilter.schema'
import { PhoneLabelSchema } from '../enums/PhoneLabel.schema'
import { BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

///@ts-ignore
export const ContactPhoneScalarWhereInputObjectSchema = z.object({
	id: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	number: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	label: z
		.union([EnumPhoneLabelFilterObjectSchema, PhoneLabelSchema])
		?.optional(),
	primary: z
		.union([BoolNullableFilterObjectSchema, z.boolean().nullable()])
		?.optional(),
	contactId: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	createdAt: z
		.union([DateTimeNullableFilterObjectSchema, z.date().nullable()])
		?.optional(),
	updatedAt: z
		.union([DateTimeNullableFilterObjectSchema, z.date().nullable()])
		?.optional(),
})
