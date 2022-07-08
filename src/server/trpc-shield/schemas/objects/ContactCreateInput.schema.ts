import { z } from 'zod'
import { EmailNullableCreateEnvelopeInputObjectSchema } from './EmailNullableCreateEnvelopeInput.schema'
import { EmailCreateInputObjectSchema } from './EmailCreateInput.schema'
import { PhoneNullableCreateEnvelopeInputObjectSchema } from './PhoneNullableCreateEnvelopeInput.schema'
import { PhoneCreateInputObjectSchema } from './PhoneCreateInput.schema'
import { SocialMediaListCreateEnvelopeInputObjectSchema } from './SocialMediaListCreateEnvelopeInput.schema'
import { SocialMediaCreateInputObjectSchema } from './SocialMediaCreateInput.schema'
import { InteractionsNullableCreateEnvelopeInputObjectSchema } from './InteractionsNullableCreateEnvelopeInput.schema'
import { InteractionsCreateInputObjectSchema } from './InteractionsCreateInput.schema'
import { UserCreateNestedOneWithoutContactsInputObjectSchema } from './UserCreateNestedOneWithoutContactsInput.schema'
import { ConnectByID, ConnectBy, ConvertBSON } from '../connect'

export const ContactCreateInputObjectSchema = z.object({
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
	// socialMedia: ConvertBSON(z.string()?.optional().nullable()),
	// interactions: z
	// 	.union([
	// 		InteractionsNullableCreateEnvelopeInputObjectSchema,
	// 		InteractionsCreateInputObjectSchema.nullable(),
	// 	])
	// 	?.optional(),
	onTwitterList: z.boolean()?.optional(),
	associatedUser: ConnectByID,
})
