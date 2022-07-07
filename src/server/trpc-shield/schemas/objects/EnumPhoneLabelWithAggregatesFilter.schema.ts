import { z } from 'zod'
import { PhoneLabelSchema } from '../enums/PhoneLabel.schema'
import { NestedEnumPhoneLabelWithAggregatesFilterObjectSchema } from './NestedEnumPhoneLabelWithAggregatesFilter.schema'
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema'
import { NestedEnumPhoneLabelFilterObjectSchema } from './NestedEnumPhoneLabelFilter.schema'

///@ts-ignore
export const EnumPhoneLabelWithAggregatesFilterObjectSchema = z.object({
	equals: PhoneLabelSchema?.optional(),
	in: PhoneLabelSchema,
	notIn: PhoneLabelSchema,
	not: z
		.union([
			PhoneLabelSchema,
			NestedEnumPhoneLabelWithAggregatesFilterObjectSchema,
		])
		?.optional(),
	_count: NestedIntFilterObjectSchema?.optional(),
	_min: NestedEnumPhoneLabelFilterObjectSchema?.optional(),
	_max: NestedEnumPhoneLabelFilterObjectSchema?.optional(),
})
