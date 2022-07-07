import { z } from 'zod'
import { EmailCreateInputObjectSchema } from './EmailCreateInput.schema'

export const EmailNullableCreateEnvelopeInputObjectSchema = z.object({
	set: EmailCreateInputObjectSchema?.optional().nullable(),
})
