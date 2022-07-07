import { z } from 'zod'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

///@ts-ignore
export const SessionScalarWhereWithAggregatesInputObjectSchema = z.object({
	id: z.union([StringWithAggregatesFilterObjectSchema, z.string()])?.optional(),
	sessionToken: z
		.union([StringWithAggregatesFilterObjectSchema, z.string()])
		?.optional(),
	userId: z
		.union([StringWithAggregatesFilterObjectSchema, z.string()])
		?.optional(),
	expires: z
		.union([DateTimeWithAggregatesFilterObjectSchema, z.date()])
		?.optional(),
})
