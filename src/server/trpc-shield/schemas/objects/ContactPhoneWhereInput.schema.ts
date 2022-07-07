import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { EnumPhoneLabelFilterObjectSchema } from './EnumPhoneLabelFilter.schema'
import { PhoneLabelSchema } from '../enums/PhoneLabel.schema'
import { BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema'
import { ContactRelationFilterObjectSchema } from './ContactRelationFilter.schema'
import { ContactWhereInputObjectSchema } from './ContactWhereInput.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

///@ts-ignore
export const ContactPhoneWhereInputObjectSchema = z.object({
	id: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	number: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	label: z
		.union([EnumPhoneLabelFilterObjectSchema, PhoneLabelSchema])
		?.optional(),
	primary: z
		.union([BoolNullableFilterObjectSchema, z.boolean().nullable()])
		?.optional(),
	contact: z
		.union([ContactRelationFilterObjectSchema, ContactWhereInputObjectSchema])
		?.optional(),
	contactId: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	createdAt: z
		.union([DateTimeNullableFilterObjectSchema, z.date().nullable()])
		?.optional(),
	updatedAt: z
		.union([DateTimeNullableFilterObjectSchema, z.date().nullable()])
		?.optional(),
})
