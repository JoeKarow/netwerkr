import { z } from 'zod'
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema'

///@ts-ignore
export const IntNullableFilterObjectSchema = z.object({
	equals: z.number()?.optional().nullable(),
	in: z.array(z.number()).nullable(),
	notIn: z.array(z.number()).nullable(),
	lt: z.number()?.optional(),
	lte: z.number()?.optional(),
	gt: z.number()?.optional(),
	gte: z.number()?.optional(),
	not: z
		.union([z.number(), NestedIntNullableFilterObjectSchema.nullable()])
		?.optional(),
	isSet: z.boolean()?.optional(),
})
