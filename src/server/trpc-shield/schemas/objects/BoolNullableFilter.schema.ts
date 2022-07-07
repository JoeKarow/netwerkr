import { z } from 'zod'
import { NestedBoolNullableFilterObjectSchema } from './NestedBoolNullableFilter.schema'

///@ts-ignore
export const BoolNullableFilterObjectSchema = z.object({
	equals: z.boolean()?.optional().nullable(),
	not: z
		.union([z.boolean(), NestedBoolNullableFilterObjectSchema.nullable()])
		?.optional(),
	isSet: z.boolean()?.optional(),
})
