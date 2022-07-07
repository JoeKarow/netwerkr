import { z } from 'zod'

///@ts-ignore
export const NestedBoolNullableFilterObjectSchema = z.object({
	equals: z.boolean()?.optional().nullable(),
	not: z
		.union([
			z.boolean(),
			z.lazy(() => NestedBoolNullableFilterObjectSchema).nullable(),
		])
		?.optional(),
	isSet: z.boolean()?.optional(),
})
