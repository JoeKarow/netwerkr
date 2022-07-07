import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

///@ts-ignore
export const SocialMediaServiceWhereInputObjectSchema = z.object({
	id: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	name: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	urlbase: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	createdAt: z
		.union([DateTimeNullableFilterObjectSchema, z.date().nullable()])
		?.optional(),
	updatedAt: z.union([DateTimeFilterObjectSchema, z.date()])?.optional(),
})
