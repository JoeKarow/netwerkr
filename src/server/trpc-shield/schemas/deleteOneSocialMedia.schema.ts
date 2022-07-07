import { z } from 'zod'
import { SocialMediaWhereUniqueInputObjectSchema } from './objects/SocialMediaWhereUniqueInput.schema'

export const SocialMediaDeleteOneSchema = z.object({
	where: SocialMediaWhereUniqueInputObjectSchema,
})
