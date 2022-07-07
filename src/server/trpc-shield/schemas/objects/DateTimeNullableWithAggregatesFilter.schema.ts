import { z } from 'zod'
import { NestedDateTimeNullableWithAggregatesFilterObjectSchema } from './NestedDateTimeNullableWithAggregatesFilter.schema'
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema'
import { NestedDateTimeNullableFilterObjectSchema } from './NestedDateTimeNullableFilter.schema'

///@ts-ignore
export const DateTimeNullableWithAggregatesFilterObjectSchema = z.object({
	equals: z.date()?.optional().nullable(),
	in: z.array(z.date()).nullable(),
	notIn: z.array(z.date()).nullable(),
	lt: z.date()?.optional(),
	lte: z.date()?.optional(),
	gt: z.date()?.optional(),
	gte: z.date()?.optional(),
	not: z
		.union([
			z.date(),
			NestedDateTimeNullableWithAggregatesFilterObjectSchema.nullable(),
		])
		?.optional(),
	_count: NestedIntNullableFilterObjectSchema?.optional(),
	_min: NestedDateTimeNullableFilterObjectSchema?.optional(),
	_max: NestedDateTimeNullableFilterObjectSchema?.optional(),
	isSet: z.boolean()?.optional(),
})
