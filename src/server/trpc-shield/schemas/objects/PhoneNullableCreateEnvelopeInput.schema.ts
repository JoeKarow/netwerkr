import { z } from 'zod'
import { PhoneCreateInputObjectSchema } from './PhoneCreateInput.schema'

export const PhoneNullableCreateEnvelopeInputObjectSchema = z.object({
	set: PhoneCreateInputObjectSchema?.optional().nullable(),
})
