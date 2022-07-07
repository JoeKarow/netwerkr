import { z } from 'zod'
import { PhoneCreateInputObjectSchema } from './PhoneCreateInput.schema'
import { PhoneUpsertInputObjectSchema } from './PhoneUpsertInput.schema'

export const PhoneNullableUpdateEnvelopeInputObjectSchema = z.object({
	set: PhoneCreateInputObjectSchema?.optional().nullable(),
	upsert: PhoneUpsertInputObjectSchema?.optional(),
	unset: z.boolean()?.optional(),
})
