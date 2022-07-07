import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { InteractionsUpdateManyWithoutSourceSocialInputObjectSchema } from './InteractionsUpdateManyWithoutSourceSocialInput.schema'
import { SocialMediaUpdateManyWithoutServiceInputObjectSchema } from './SocialMediaUpdateManyWithoutServiceInput.schema'

export const SocialMediaServiceUpdateInputObjectSchema = z.object({
	name: z
		.union([z.string(), StringFieldUpdateOperationsInputObjectSchema])
		?.optional(),
	urlbase: z
		.union([z.string(), StringFieldUpdateOperationsInputObjectSchema])
		?.optional(),
	Interactions:
		InteractionsUpdateManyWithoutSourceSocialInputObjectSchema?.optional(),
	SocialMedia: SocialMediaUpdateManyWithoutServiceInputObjectSchema?.optional(),
})
