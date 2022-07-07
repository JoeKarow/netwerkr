import { z } from 'zod'
import { SocialMediaServiceWhereInputObjectSchema } from './SocialMediaServiceWhereInput.schema'

///@ts-ignore
export const SocialMediaServiceRelationFilterObjectSchema = z.object({
	is: SocialMediaServiceWhereInputObjectSchema?.optional().nullable(),
	isNot: SocialMediaServiceWhereInputObjectSchema?.optional().nullable(),
})
