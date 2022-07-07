import { z } from 'zod'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

///@ts-ignore
export const SocialMediaServiceScalarWhereWithAggregatesInputObjectSchema =
	z.object({
		id: z
			.union([StringWithAggregatesFilterObjectSchema, z.string()])
			?.optional(),
		name: z
			.union([StringWithAggregatesFilterObjectSchema, z.string()])
			?.optional(),
		urlbase: z
			.union([StringWithAggregatesFilterObjectSchema, z.string()])
			?.optional(),
		createdAt: z
			.union([
				DateTimeNullableWithAggregatesFilterObjectSchema,
				z.date().nullable(),
			])
			?.optional(),
		updatedAt: z
			.union([DateTimeWithAggregatesFilterObjectSchema, z.date()])
			?.optional(),
	})
