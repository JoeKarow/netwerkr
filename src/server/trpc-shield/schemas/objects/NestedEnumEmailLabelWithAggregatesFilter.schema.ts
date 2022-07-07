import { z } from 'zod'
import { EmailLabelSchema } from '../enums/EmailLabel.schema'
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema'
import { NestedEnumEmailLabelFilterObjectSchema } from './NestedEnumEmailLabelFilter.schema'

///@ts-ignore
export const NestedEnumEmailLabelWithAggregatesFilterObjectSchema = z.object({
	equals: EmailLabelSchema?.optional(),
	in: EmailLabelSchema,
	notIn: EmailLabelSchema,
	not: z
		.union([
			EmailLabelSchema,
			z.lazy(() => NestedEnumEmailLabelWithAggregatesFilterObjectSchema),
		])
		?.optional(),
	_count: NestedIntFilterObjectSchema?.optional(),
	_min: NestedEnumEmailLabelFilterObjectSchema?.optional(),
	_max: NestedEnumEmailLabelFilterObjectSchema?.optional(),
})
