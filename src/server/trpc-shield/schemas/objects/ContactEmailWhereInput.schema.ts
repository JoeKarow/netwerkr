import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema'
import { EnumEmailLabelFilterObjectSchema } from './EnumEmailLabelFilter.schema'
import { EmailLabelSchema } from '../enums/EmailLabel.schema'
import { ContactRelationFilterObjectSchema } from './ContactRelationFilter.schema'
import { ContactWhereInputObjectSchema } from './ContactWhereInput.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

///@ts-ignore
export const ContactEmailWhereInputObjectSchema = z.object({
	id: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	email: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	primary: z
		.union([BoolNullableFilterObjectSchema, z.boolean().nullable()])
		?.optional(),
	label: z
		.union([EnumEmailLabelFilterObjectSchema, EmailLabelSchema])
		?.optional(),
	contact: z
		.union([ContactRelationFilterObjectSchema, ContactWhereInputObjectSchema])
		?.optional(),
	createdAt: z
		.union([DateTimeNullableFilterObjectSchema, z.date().nullable()])
		?.optional(),
	updatedAt: z
		.union([DateTimeNullableFilterObjectSchema, z.date().nullable()])
		?.optional(),
	contactId: z.union([StringFilterObjectSchema, z.string()])?.optional(),
})
