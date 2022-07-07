import { z } from 'zod'
import { SocialMediaServiceWhereUniqueInputObjectSchema } from './objects/SocialMediaServiceWhereUniqueInput.schema'

export const SocialMediaServiceDeleteOneSchema = z.object({
	where: SocialMediaServiceWhereUniqueInputObjectSchema,
})
