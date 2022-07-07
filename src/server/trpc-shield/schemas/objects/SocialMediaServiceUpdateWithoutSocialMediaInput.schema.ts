import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { InteractionsUpdateManyWithoutSourceSocialInputObjectSchema } from './InteractionsUpdateManyWithoutSourceSocialInput.schema'

export const SocialMediaServiceUpdateWithoutSocialMediaInputObjectSchema =
	z.object({
		name: z
			.union([z.string(), StringFieldUpdateOperationsInputObjectSchema])
			?.optional(),
		urlbase: z
			.union([z.string(), StringFieldUpdateOperationsInputObjectSchema])
			?.optional(),
		Interactions:
			InteractionsUpdateManyWithoutSourceSocialInputObjectSchema?.optional(),
	})
