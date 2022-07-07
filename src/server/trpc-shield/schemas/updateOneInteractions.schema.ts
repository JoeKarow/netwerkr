import { z } from 'zod'
import { InteractionsUpdateInputObjectSchema } from './objects/InteractionsUpdateInput.schema'
import { InteractionsWhereUniqueInputObjectSchema } from './objects/InteractionsWhereUniqueInput.schema'

export const InteractionsUpdateOneSchema = z.object({
	data: InteractionsUpdateInputObjectSchema,
	where: InteractionsWhereUniqueInputObjectSchema,
})
