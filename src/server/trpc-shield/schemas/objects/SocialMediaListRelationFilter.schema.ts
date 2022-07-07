import { z } from 'zod'
import { SocialMediaWhereInputObjectSchema } from './SocialMediaWhereInput.schema'

///@ts-ignore
export const SocialMediaListRelationFilterObjectSchema = z.object({
	every: SocialMediaWhereInputObjectSchema?.optional(),
	some: SocialMediaWhereInputObjectSchema?.optional(),
	none: SocialMediaWhereInputObjectSchema?.optional(),
})
