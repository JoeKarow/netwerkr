import { z } from 'zod'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { EmailNullableUpdateEnvelopeInputObjectSchema } from './EmailNullableUpdateEnvelopeInput.schema'
import { EmailCreateInputObjectSchema } from './EmailCreateInput.schema'
import { PhoneNullableUpdateEnvelopeInputObjectSchema } from './PhoneNullableUpdateEnvelopeInput.schema'
import { PhoneCreateInputObjectSchema } from './PhoneCreateInput.schema'
import { SocialMediaListUpdateEnvelopeInputObjectSchema } from './SocialMediaListUpdateEnvelopeInput.schema'
import { SocialMediaCreateInputObjectSchema } from './SocialMediaCreateInput.schema'
import { InteractionsNullableUpdateEnvelopeInputObjectSchema } from './InteractionsNullableUpdateEnvelopeInput.schema'
import { InteractionsCreateInputObjectSchema } from './InteractionsCreateInput.schema'
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema'
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'

export const ContactUpdateWithoutAssociatedUserInputObjectSchema = z.object({
	firstName: z
		.union([
			z.string(),
			NullableStringFieldUpdateOperationsInputObjectSchema.nullable(),
		])
		?.optional(),
	lastName: z
		.union([
			z.string(),
			NullableStringFieldUpdateOperationsInputObjectSchema.nullable(),
		])
		?.optional(),
	email: z
		.union([
			EmailNullableUpdateEnvelopeInputObjectSchema,
			EmailCreateInputObjectSchema.nullable(),
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
	interactions: z
		.union([
			InteractionsNullableUpdateEnvelopeInputObjectSchema,
			InteractionsCreateInputObjectSchema.nullable(),
		])
		?.optional(),
	onTwitterList: z
		.union([z.boolean(), BoolFieldUpdateOperationsInputObjectSchema])
		?.optional(),
	createdAt: z
		.union([
			z.date(),
			NullableDateTimeFieldUpdateOperationsInputObjectSchema.nullable(),
		])
		?.optional(),
})
