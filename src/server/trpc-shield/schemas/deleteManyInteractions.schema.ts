import { z } from 'zod'
import { InteractionsWhereInputObjectSchema } from './objects/InteractionsWhereInput.schema'

export const InteractionsDeleteManySchema = z.object({
	where: InteractionsWhereInputObjectSchema.optional(),
})
