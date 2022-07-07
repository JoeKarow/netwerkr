import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { InteractionsListRelationFilterObjectSchema } from './InteractionsListRelationFilter.schema'
import { SocialMediaListRelationFilterObjectSchema } from './SocialMediaListRelationFilter.schema'

///@ts-ignore
export const SocialMediaServiceWhereInputObjectSchema = z.object({
	id: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	name: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	urlbase: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	Interactions: InteractionsListRelationFilterObjectSchema?.optional(),
	SocialMedia: SocialMediaListRelationFilterObjectSchema?.optional(),
})
