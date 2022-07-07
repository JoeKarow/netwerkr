import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { SocialMediaUncheckedUpdateManyWithoutServiceInputObjectSchema } from './SocialMediaUncheckedUpdateManyWithoutServiceInput.schema'

export const SocialMediaServiceUncheckedUpdateWithoutInteractionsInputObjectSchema =
	z.object({
		name: z
			.union([z.string(), StringFieldUpdateOperationsInputObjectSchema])
			?.optional(),
		urlbase: z
			.union([z.string(), StringFieldUpdateOperationsInputObjectSchema])
			?.optional(),
		SocialMedia:
			SocialMediaUncheckedUpdateManyWithoutServiceInputObjectSchema?.optional(),
	})
