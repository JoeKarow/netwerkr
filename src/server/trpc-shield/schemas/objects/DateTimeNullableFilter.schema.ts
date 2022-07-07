import { z } from 'zod'
import { NestedDateTimeNullableFilterObjectSchema } from './NestedDateTimeNullableFilter.schema'

///@ts-ignore
export const DateTimeNullableFilterObjectSchema = z.object({
	equals: z.date()?.optional().nullable(),
	in: z.array(z.date()).nullable(),
	notIn: z.array(z.date()).nullable(),
	lt: z.date()?.optional(),
	lte: z.date()?.optional(),
	gt: z.date()?.optional(),
	gte: z.date()?.optional(),
	not: z
		.union([z.date(), NestedDateTimeNullableFilterObjectSchema.nullable()])
		?.optional(),
	isSet: z.boolean()?.optional(),
})