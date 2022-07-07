import { z } from 'zod'
import { NestedBoolFilterObjectSchema } from './NestedBoolFilter.schema'

///@ts-ignore
export const BoolFilterObjectSchema = z.object({
	equals: z.boolean()?.optional(),
	not: z.union([z.boolean(), NestedBoolFilterObjectSchema])?.optional(),
})
