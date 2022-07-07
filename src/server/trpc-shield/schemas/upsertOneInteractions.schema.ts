import { z } from 'zod'
import { InteractionsWhereUniqueInputObjectSchema } from './objects/InteractionsWhereUniqueInput.schema'
import { InteractionsCreateInputObjectSchema } from './objects/InteractionsCreateInput.schema'
import { InteractionsUpdateInputObjectSchema } from './objects/InteractionsUpdateInput.schema'

export const InteractionsUpsertSchema = z.object({
	where: InteractionsWhereUniqueInputObjectSchema,
	create: InteractionsCreateInputObjectSchema,
	update: InteractionsUpdateInputObjectSchema,
})
