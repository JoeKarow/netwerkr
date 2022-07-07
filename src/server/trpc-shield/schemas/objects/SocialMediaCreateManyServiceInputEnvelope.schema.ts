import { z } from 'zod'
import { SocialMediaCreateManyServiceInputObjectSchema } from './SocialMediaCreateManyServiceInput.schema'

export const SocialMediaCreateManyServiceInputEnvelopeObjectSchema = z.object({
	data: z.array(SocialMediaCreateManyServiceInputObjectSchema),
})
