import { z } from 'zod'
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema'
import { NestedBoolFilterObjectSchema } from './NestedBoolFilter.schema'

///@ts-ignore
export const NestedBoolWithAggregatesFilterObjectSchema = z.object({
	equals: z.boolean()?.optional(),
	not: z
		.union([
			z.boolean(),
			z.lazy(() => NestedBoolWithAggregatesFilterObjectSchema),
		])
		?.optional(),
	_count: NestedIntFilterObjectSchema?.optional(),
	_min: NestedBoolFilterObjectSchema?.optional(),
	_max: NestedBoolFilterObjectSchema?.optional(),
})
