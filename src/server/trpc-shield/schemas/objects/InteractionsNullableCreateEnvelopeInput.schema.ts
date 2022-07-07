import { z } from 'zod'
import { InteractionsCreateInputObjectSchema } from './InteractionsCreateInput.schema'

export const InteractionsNullableCreateEnvelopeInputObjectSchema = z.object({
	set: InteractionsCreateInputObjectSchema?.optional().nullable(),
})
