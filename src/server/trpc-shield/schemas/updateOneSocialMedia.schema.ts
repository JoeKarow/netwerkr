import { z } from 'zod'
import { SocialMediaUpdateInputObjectSchema } from './objects/SocialMediaUpdateInput.schema'
import { SocialMediaWhereUniqueInputObjectSchema } from './objects/SocialMediaWhereUniqueInput.schema'

export const SocialMediaUpdateOneSchema = z.object({
	data: SocialMediaUpdateInputObjectSchema,
	where: SocialMediaWhereUniqueInputObjectSchema,
})
