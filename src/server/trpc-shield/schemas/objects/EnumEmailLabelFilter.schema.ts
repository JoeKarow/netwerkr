import { z } from 'zod'
import { EmailLabelSchema } from '../enums/EmailLabel.schema'
import { NestedEnumEmailLabelFilterObjectSchema } from './NestedEnumEmailLabelFilter.schema'

///@ts-ignore
export const EnumEmailLabelFilterObjectSchema = z.object({
	equals: EmailLabelSchema?.optional(),
	in: EmailLabelSchema,
	notIn: EmailLabelSchema,
	not: z
		.union([EmailLabelSchema, NestedEnumEmailLabelFilterObjectSchema])
		?.optional(),
})
