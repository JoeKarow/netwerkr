import { z } from 'zod'
import { NestedBoolWithAggregatesFilterObjectSchema } from './NestedBoolWithAggregatesFilter.schema'
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema'
import { NestedBoolFilterObjectSchema } from './NestedBoolFilter.schema'

///@ts-ignore
export const BoolWithAggregatesFilterObjectSchema = z.object({
	equals: z.boolean()?.optional(),
	not: z
		.union([z.boolean(), NestedBoolWithAggregatesFilterObjectSchema])
		?.optional(),
	_count: NestedIntFilterObjectSchema?.optional(),
	_min: NestedBoolFilterObjectSchema?.optional(),
	_max: NestedBoolFilterObjectSchema?.optional(),
})
