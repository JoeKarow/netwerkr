import { z } from 'zod'
import { InteractionsCreateNestedManyWithoutSourceSocialInputObjectSchema } from './InteractionsCreateNestedManyWithoutSourceSocialInput.schema'
import { SocialMediaCreateNestedManyWithoutServiceInputObjectSchema } from './SocialMediaCreateNestedManyWithoutServiceInput.schema'

export const SocialMediaServiceCreateInputObjectSchema = z.object({
	id: z.string()?.optional(),
	name: z.string(),
	urlbase: z.string(),
	Interactions:
		InteractionsCreateNestedManyWithoutSourceSocialInputObjectSchema?.optional(),
	SocialMedia:
		SocialMediaCreateNestedManyWithoutServiceInputObjectSchema?.optional(),
})
