import { z } from 'zod'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

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
	})
