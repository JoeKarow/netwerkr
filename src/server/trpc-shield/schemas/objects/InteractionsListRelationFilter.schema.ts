import { z } from 'zod'
import { InteractionsWhereInputObjectSchema } from './InteractionsWhereInput.schema'

///@ts-ignore
export const InteractionsListRelationFilterObjectSchema = z.object({
	every: InteractionsWhereInputObjectSchema?.optional(),
	some: InteractionsWhereInputObjectSchema?.optional(),
	none: InteractionsWhereInputObjectSchema?.optional(),
})
