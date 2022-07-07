import { z } from 'zod'
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema'
import { NestedFloatNullableFilterObjectSchema } from './NestedFloatNullableFilter.schema'

///@ts-ignore
export const NestedIntNullableWithAggregatesFilterObjectSchema = z.object({
	equals: z.number()?.optional().nullable(),
	in: z.array(z.number()).nullable(),
	notIn: z.array(z.number()).nullable(),
	lt: z.number()?.optional(),
	lte: z.number()?.optional(),
	gt: z.number()?.optional(),
	gte: z.number()?.optional(),
	not: z
		.union([
			z.number(),
			z
				.lazy(() => NestedIntNullableWithAggregatesFilterObjectSchema)
				.nullable(),
		])
		?.optional(),
	_count: NestedIntNullableFilterObjectSchema?.optional(),
	_avg: NestedFloatNullableFilterObjectSchema?.optional(),
	_sum: NestedIntNullableFilterObjectSchema?.optional(),
	_min: NestedIntNullableFilterObjectSchema?.optional(),
	_max: NestedIntNullableFilterObjectSchema?.optional(),
	isSet: z.boolean()?.optional(),
})
