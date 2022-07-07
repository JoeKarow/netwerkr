import { z } from 'zod'
import { SocialMediaWhereInputObjectSchema } from './SocialMediaWhereInput.schema'
import { SocialMediaUpdateInputObjectSchema } from './SocialMediaUpdateInput.schema'

export const SocialMediaUpdateManyInputObjectSchema = z.object({
	where: SocialMediaWhereInputObjectSchema,
	data: SocialMediaUpdateInputObjectSchema,
})
