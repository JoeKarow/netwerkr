import { z } from 'zod'
import { InteractionsCreateNestedManyWithoutSourceSocialInputObjectSchema } from './InteractionsCreateNestedManyWithoutSourceSocialInput.schema'

export const SocialMediaServiceCreateWithoutSocialMediaInputObjectSchema =
	z.object({
		id: z.string()?.optional(),
		name: z.string(),
		urlbase: z.string(),
		Interactions:
			InteractionsCreateNestedManyWithoutSourceSocialInputObjectSchema?.optional(),
	})
