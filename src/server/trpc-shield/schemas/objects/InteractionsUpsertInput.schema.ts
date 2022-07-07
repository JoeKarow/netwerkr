import { z } from 'zod'
import { InteractionsCreateInputObjectSchema } from './InteractionsCreateInput.schema'
import { InteractionsUpdateInputObjectSchema } from './InteractionsUpdateInput.schema'

export const InteractionsUpsertInputObjectSchema = z.object({
	set: InteractionsCreateInputObjectSchema.nullable(),
	update: InteractionsUpdateInputObjectSchema,
})
