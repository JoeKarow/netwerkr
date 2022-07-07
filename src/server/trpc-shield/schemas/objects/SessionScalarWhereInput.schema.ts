import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

///@ts-ignore
export const SessionScalarWhereInputObjectSchema = z.object({
	id: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	sessionToken: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	userId: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	expires: z.union([DateTimeFilterObjectSchema, z.date()])?.optional(),
})
