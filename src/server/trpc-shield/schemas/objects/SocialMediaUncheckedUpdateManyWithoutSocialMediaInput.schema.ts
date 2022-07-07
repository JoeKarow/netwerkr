import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'

export const SocialMediaUncheckedUpdateManyWithoutSocialMediaInputObjectSchema =
	z.object({
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
		socialMediaServiceId: z
			.union([z.string(), StringFieldUpdateOperationsInputObjectSchema])
			?.optional(),
	})
