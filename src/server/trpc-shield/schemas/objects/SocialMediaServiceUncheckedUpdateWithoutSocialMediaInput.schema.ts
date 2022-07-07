import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { InteractionsUncheckedUpdateManyWithoutSourceSocialInputObjectSchema } from './InteractionsUncheckedUpdateManyWithoutSourceSocialInput.schema'

export const SocialMediaServiceUncheckedUpdateWithoutSocialMediaInputObjectSchema =
	z.object({
		name: z
			.union([z.string(), StringFieldUpdateOperationsInputObjectSchema])
			?.optional(),
		urlbase: z
			.union([z.string(), StringFieldUpdateOperationsInputObjectSchema])
			?.optional(),
		Interactions:
			InteractionsUncheckedUpdateManyWithoutSourceSocialInputObjectSchema?.optional(),
	})
