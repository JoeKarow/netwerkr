import { z } from 'zod'
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema'
import { NestedBoolNullableFilterObjectSchema } from './NestedBoolNullableFilter.schema'

///@ts-ignore
export const NestedBoolNullableWithAggregatesFilterObjectSchema = z.object({
	equals: z.boolean()?.optional().nullable(),
	not: z
		.union([
			z.boolean(),
			z
				.lazy(() => NestedBoolNullableWithAggregatesFilterObjectSchema)
				.nullable(),
		])
		?.optional(),
	_count: NestedIntNullableFilterObjectSchema?.optional(),
	_min: NestedBoolNullableFilterObjectSchema?.optional(),
	_max: NestedBoolNullableFilterObjectSchema?.optional(),
	isSet: z.boolean()?.optional(),
})
