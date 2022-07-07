import { z } from 'zod'
import { InteractionsUncheckedCreateNestedManyWithoutSourceSocialInputObjectSchema } from './InteractionsUncheckedCreateNestedManyWithoutSourceSocialInput.schema'
import { SocialMediaUncheckedCreateNestedManyWithoutServiceInputObjectSchema } from './SocialMediaUncheckedCreateNestedManyWithoutServiceInput.schema'

export const SocialMediaServiceUncheckedCreateInputObjectSchema = z.object({
	id: z.string()?.optional(),
	name: z.string(),
	urlbase: z.string(),
	Interactions:
		InteractionsUncheckedCreateNestedManyWithoutSourceSocialInputObjectSchema?.optional(),
	SocialMedia:
		SocialMediaUncheckedCreateNestedManyWithoutServiceInputObjectSchema?.optional(),
})
