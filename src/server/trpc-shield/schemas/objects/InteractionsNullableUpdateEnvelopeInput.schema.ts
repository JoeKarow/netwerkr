import { z } from 'zod'
import { InteractionsCreateInputObjectSchema } from './InteractionsCreateInput.schema'
import { InteractionsUpsertInputObjectSchema } from './InteractionsUpsertInput.schema'

export const InteractionsNullableUpdateEnvelopeInputObjectSchema = z.object({
	set: InteractionsCreateInputObjectSchema?.optional().nullable(),
	upsert: InteractionsUpsertInputObjectSchema?.optional(),
	unset: z.boolean()?.optional(),
})
