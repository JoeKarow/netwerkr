import { z } from 'zod'
import { InteractionsCreateInputObjectSchema } from './objects/InteractionsCreateInput.schema'

export const InteractionsCreateSchema = z.object({
	data: InteractionsCreateInputObjectSchema,
})
