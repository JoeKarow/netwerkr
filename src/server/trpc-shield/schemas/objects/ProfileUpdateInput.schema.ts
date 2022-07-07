import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { EmailListUpdateEnvelopeInputObjectSchema } from './EmailListUpdateEnvelopeInput.schema'
import { EmailCreateInputObjectSchema } from './EmailCreateInput.schema'
import { PhoneNullableUpdateEnvelopeInputObjectSchema } from './PhoneNullableUpdateEnvelopeInput.schema'
import { PhoneCreateInputObjectSchema } from './PhoneCreateInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { SocialMediaListUpdateEnvelopeInputObjectSchema } from './SocialMediaListUpdateEnvelopeInput.schema'
import { SocialMediaCreateInputObjectSchema } from './SocialMediaCreateInput.schema'
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'

export const ProfileUpdateInputObjectSchema = z.object({
	firstName: z
		.union([z.string(), StringFieldUpdateOperationsInputObjectSchema])
		?.optional(),
	lastName: z
		.union([z.string(), StringFieldUpdateOperationsInputObjectSchema])
		?.optional(),
	email: z
		.union([
			EmailListUpdateEnvelopeInputObjectSchema,
			EmailCreateInputObjectSchema,
			z.array(EmailCreateInputObjectSchema),
		])
		?.optional(),
	phone: z
		.union([
			PhoneNullableUpdateEnvelopeInputObjectSchema,
			PhoneCreateInputObjectSchema.nullable(),
		])
		?.optional(),
	photo: z
		.union([
			z.string(),
			NullableStringFieldUpdateOperationsInputObjectSchema.nullable(),
		])
		?.optional(),
	socialMedia: z
		.union([
			SocialMediaListUpdateEnvelopeInputObjectSchema,
			SocialMediaCreateInputObjectSchema,
			z.array(SocialMediaCreateInputObjectSchema),
		])
		?.optional(),
	createdAt: z
		.union([
			z.date(),
			NullableDateTimeFieldUpdateOperationsInputObjectSchema.nullable(),
		])
		?.optional(),
})
