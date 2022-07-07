import { z } from 'zod'
import { PhoneLabelSchema } from '../enums/PhoneLabel.schema'
import { NestedEnumPhoneLabelFilterObjectSchema } from './NestedEnumPhoneLabelFilter.schema'

///@ts-ignore
export const EnumPhoneLabelFilterObjectSchema = z.object({
	equals: PhoneLabelSchema?.optional(),
	in: PhoneLabelSchema,
	notIn: PhoneLabelSchema,
	not: z
		.union([PhoneLabelSchema, NestedEnumPhoneLabelFilterObjectSchema])
		?.optional(),
})
