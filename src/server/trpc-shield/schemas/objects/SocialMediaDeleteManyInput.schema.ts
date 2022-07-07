import { z } from 'zod'
import { SocialMediaWhereInputObjectSchema } from './SocialMediaWhereInput.schema'

export const SocialMediaDeleteManyInputObjectSchema = z.object({
	where: SocialMediaWhereInputObjectSchema,
})
