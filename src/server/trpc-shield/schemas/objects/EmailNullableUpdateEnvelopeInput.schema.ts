import { z } from 'zod'
import { EmailCreateInputObjectSchema } from './EmailCreateInput.schema'
import { EmailUpsertInputObjectSchema } from './EmailUpsertInput.schema'

export const EmailNullableUpdateEnvelopeInputObjectSchema = z.object({
	set: EmailCreateInputObjectSchema?.optional().nullable(),
	upsert: EmailUpsertInputObjectSchema?.optional(),
	unset: z.boolean()?.optional(),
})
