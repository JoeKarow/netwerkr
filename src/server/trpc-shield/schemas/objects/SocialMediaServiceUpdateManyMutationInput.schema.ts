import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

export const SocialMediaServiceUpdateManyMutationInputObjectSchema = z.object({
	name: z
		.union([z.string(), StringFieldUpdateOperationsInputObjectSchema])
		?.optional(),
	urlbase: z
		.union([z.string(), StringFieldUpdateOperationsInputObjectSchema])
		?.optional(),
})
