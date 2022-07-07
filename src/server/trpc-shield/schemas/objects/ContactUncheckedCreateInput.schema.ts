import { z } from 'zod'
import { EmailNullableCreateEnvelopeInputObjectSchema } from './EmailNullableCreateEnvelopeInput.schema'
import { EmailCreateInputObjectSchema } from './EmailCreateInput.schema'
import { PhoneNullableCreateEnvelopeInputObjectSchema } from './PhoneNullableCreateEnvelopeInput.schema'
import { PhoneCreateInputObjectSchema } from './PhoneCreateInput.schema'
import { SocialMediaListCreateEnvelopeInputObjectSchema } from './SocialMediaListCreateEnvelopeInput.schema'
import { SocialMediaCreateInputObjectSchema } from './SocialMediaCreateInput.schema'
import { InteractionsNullableCreateEnvelopeInputObjectSchema } from './InteractionsNullableCreateEnvelopeInput.schema'
import { InteractionsCreateInputObjectSchema } from './InteractionsCreateInput.schema'

export const ContactUncheckedCreateInputObjectSchema = z.object({
	id: z.string()?.optional(),
	firstName: z.string()?.optional().nullable(),
	lastName: z.string()?.optional().nullable(),
	email: z
		.union([
			EmailNullableCreateEnvelopeInputObjectSchema,
			EmailCreateInputObjectSchema.nullable(),
		])
		?.optional(),
	phone: z
		.union([
			PhoneNullableCreateEnvelopeInputObjectSchema,
			PhoneCreateInputObjectSchema.nullable(),
		])
		?.optional(),
	photo: z.string()?.optional().nullable(),
	socialMedia: z
		.union([
			SocialMediaListCreateEnvelopeInputObjectSchema,
			SocialMediaCreateInputObjectSchema,
			z.array(SocialMediaCreateInputObjectSchema),
		])
		?.optional(),
	interactions: z
		.union([
			InteractionsNullableCreateEnvelopeInputObjectSchema,
			InteractionsCreateInputObjectSchema.nullable(),
		])
		?.optional(),
	onTwitterList: z.boolean()?.optional(),
	createdAt: z.date()?.optional().nullable(),
	associatedUserId: z.string()?.optional().nullable(),
})
