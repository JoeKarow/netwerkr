import { z } from 'zod'
import { InteractionsUncheckedCreateNestedManyWithoutSourceSocialInputObjectSchema } from './InteractionsUncheckedCreateNestedManyWithoutSourceSocialInput.schema'

export const SocialMediaServiceUncheckedCreateWithoutSocialMediaInputObjectSchema =
	z.object({
		id: z.string()?.optional(),
		name: z.string(),
		urlbase: z.string(),
		Interactions:
			InteractionsUncheckedCreateNestedManyWithoutSourceSocialInputObjectSchema?.optional(),
	})
