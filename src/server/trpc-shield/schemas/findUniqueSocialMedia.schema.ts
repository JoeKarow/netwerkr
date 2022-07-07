import { z } from 'zod'
import { SocialMediaWhereUniqueInputObjectSchema } from './objects/SocialMediaWhereUniqueInput.schema'

export const SocialMediaFindUniqueSchema = z.object({
	where: SocialMediaWhereUniqueInputObjectSchema,
})
