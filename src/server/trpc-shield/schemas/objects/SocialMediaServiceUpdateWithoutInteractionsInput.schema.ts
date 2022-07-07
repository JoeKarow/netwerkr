import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { SocialMediaUpdateManyWithoutServiceInputObjectSchema } from './SocialMediaUpdateManyWithoutServiceInput.schema'

export const SocialMediaServiceUpdateWithoutInteractionsInputObjectSchema =
	z.object({
		name: z
			.union([z.string(), StringFieldUpdateOperationsInputObjectSchema])
			?.optional(),
		urlbase: z
			.union([z.string(), StringFieldUpdateOperationsInputObjectSchema])
			?.optional(),
		SocialMedia:
			SocialMediaUpdateManyWithoutServiceInputObjectSchema?.optional(),
	})
