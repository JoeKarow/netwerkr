import { z } from 'zod'
import { SocialMediaServiceWhereUniqueInputObjectSchema } from './objects/SocialMediaServiceWhereUniqueInput.schema'

export const SocialMediaServiceFindUniqueSchema = z.object({
	where: SocialMediaServiceWhereUniqueInputObjectSchema,
})
