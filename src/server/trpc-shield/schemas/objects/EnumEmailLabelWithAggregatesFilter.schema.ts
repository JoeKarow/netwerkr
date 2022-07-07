import { z } from 'zod'
import { EmailLabelSchema } from '../enums/EmailLabel.schema'
import { NestedEnumEmailLabelWithAggregatesFilterObjectSchema } from './NestedEnumEmailLabelWithAggregatesFilter.schema'
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema'
import { NestedEnumEmailLabelFilterObjectSchema } from './NestedEnumEmailLabelFilter.schema'

///@ts-ignore
export const EnumEmailLabelWithAggregatesFilterObjectSchema = z.object({
	equals: EmailLabelSchema?.optional(),
	in: EmailLabelSchema,
	notIn: EmailLabelSchema,
	not: z
		.union([
			EmailLabelSchema,
			NestedEnumEmailLabelWithAggregatesFilterObjectSchema,
		])
		?.optional(),
	_count: NestedIntFilterObjectSchema?.optional(),
	_min: NestedEnumEmailLabelFilterObjectSchema?.optional(),
	_max: NestedEnumEmailLabelFilterObjectSchema?.optional(),
})
