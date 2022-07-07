import { z } from 'zod'

///@ts-ignore
export const NestedBoolFilterObjectSchema = z.object({
	equals: z.boolean()?.optional(),
	not: z
		.union([z.boolean(), z.lazy(() => NestedBoolFilterObjectSchema)])
		?.optional(),
})
