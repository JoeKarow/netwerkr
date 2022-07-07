import { z } from 'zod'
import { SocialMediaCreateManyContactInputObjectSchema } from './SocialMediaCreateManyContactInput.schema'

export const SocialMediaCreateManyContactInputEnvelopeObjectSchema = z.object({
	data: z.array(SocialMediaCreateManyContactInputObjectSchema),
})
