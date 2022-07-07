import { z } from 'zod'
import { InteractionsWhereUniqueInputObjectSchema } from './objects/InteractionsWhereUniqueInput.schema'

export const InteractionsFindUniqueSchema = z.object({
	where: InteractionsWhereUniqueInputObjectSchema,
})
