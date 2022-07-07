import { z } from 'zod'
import { InteractionsUpdateManyMutationInputObjectSchema } from './objects/InteractionsUpdateManyMutationInput.schema'
import { InteractionsWhereInputObjectSchema } from './objects/InteractionsWhereInput.schema'

export const InteractionsUpdateManySchema = z.object({
	data: InteractionsUpdateManyMutationInputObjectSchema,
	where: InteractionsWhereInputObjectSchema.optional(),
})
