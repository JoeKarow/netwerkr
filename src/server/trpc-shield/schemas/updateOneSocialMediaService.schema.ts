import { z } from 'zod'
import { SocialMediaServiceUpdateInputObjectSchema } from './objects/SocialMediaServiceUpdateInput.schema'
import { SocialMediaServiceWhereUniqueInputObjectSchema } from './objects/SocialMediaServiceWhereUniqueInput.schema'

export const SocialMediaServiceUpdateOneSchema = z.object({
	data: SocialMediaServiceUpdateInputObjectSchema,
	where: SocialMediaServiceWhereUniqueInputObjectSchema,
})
