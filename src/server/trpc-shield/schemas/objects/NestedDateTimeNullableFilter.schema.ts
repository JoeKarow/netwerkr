import { z } from 'zod'

///@ts-ignore
export const NestedDateTimeNullableFilterObjectSchema = z.object({
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
			z.lazy(() => NestedDateTimeNullableFilterObjectSchema).nullable(),
		])
		?.optional(),
	isSet: z.boolean()?.optional(),
})
