import { z } from 'zod'
import { InteractionsCreateManyContactInputObjectSchema } from './InteractionsCreateManyContactInput.schema'

export const InteractionsCreateManyContactInputEnvelopeObjectSchema = z.object({
	data: z.array(InteractionsCreateManyContactInputObjectSchema),
})
