import { z } from 'zod'
import { InteractionsWhereUniqueInputObjectSchema } from './objects/InteractionsWhereUniqueInput.schema'

export const InteractionsDeleteOneSchema = z.object({
	where: InteractionsWhereUniqueInputObjectSchema,
})
