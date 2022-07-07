import { z } from 'zod'
import { ContactUpdateOneRequiredWithoutSocialMediaInputObjectSchema } from './ContactUpdateOneRequiredWithoutSocialMediaInput.schema'
import { SocialMediaServiceUpdateOneRequiredWithoutSocialMediaInputObjectSchema } from './SocialMediaServiceUpdateOneRequiredWithoutSocialMediaInput.schema'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'

export const SocialMediaUpdateInputObjectSchema = z.object({
	contact:
		ContactUpdateOneRequiredWithoutSocialMediaInputObjectSchema?.optional(),
	service:
		SocialMediaServiceUpdateOneRequiredWithoutSocialMediaInputObjectSchema?.optional(),
	userId: z
		.union([z.string(), StringFieldUpdateOperationsInputObjectSchema])
		?.optional(),
	displayName: z
		.union([z.string(), StringFieldUpdateOperationsInputObjectSchema])
		?.optional(),
	username: z
		.union([z.string(), StringFieldUpdateOperationsInputObjectSchema])
		?.optional(),
	protected: z
		.union([z.boolean(), BoolFieldUpdateOperationsInputObjectSchema])
		?.optional(),
	profileImg: z
		.union([
			z.string(),
			NullableStringFieldUpdateOperationsInputObjectSchema.nullable(),
		])
		?.optional(),
	createdAt: z
		.union([
			z.date(),
			NullableDateTimeFieldUpdateOperationsInputObjectSchema.nullable(),
		])
		?.optional(),
	updatedAt: z
		.union([
			z.date(),
			NullableDateTimeFieldUpdateOperationsInputObjectSchema.nullable(),
		])
		?.optional(),
})
