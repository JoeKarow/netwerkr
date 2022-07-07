import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema'
import { EnumEmailLabelFilterObjectSchema } from './EnumEmailLabelFilter.schema'
import { EmailLabelSchema } from '../enums/EmailLabel.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

///@ts-ignore
export const EmailWhereInputObjectSchema = z.object({
	email: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	primary: z
		.union([BoolNullableFilterObjectSchema, z.boolean().nullable()])
		?.optional(),
	label: z
		.union([EnumEmailLabelFilterObjectSchema, EmailLabelSchema])
		?.optional(),
	createdAt: z
		.union([DateTimeNullableFilterObjectSchema, z.date().nullable()])
		?.optional(),
})
