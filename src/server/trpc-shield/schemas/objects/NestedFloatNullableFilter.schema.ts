import { z } from 'zod'

///@ts-ignore
export const NestedFloatNullableFilterObjectSchema = z.object({
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
			z.lazy(() => NestedFloatNullableFilterObjectSchema).nullable(),
		])
		?.optional(),
	isSet: z.boolean()?.optional(),
})
