import { z } from 'zod'
import { InteractionsWhereInputObjectSchema } from './InteractionsWhereInput.schema'

///@ts-ignore
export const InteractionsRelationFilterObjectSchema = z.object({
	is: InteractionsWhereInputObjectSchema?.optional().nullable(),
	isNot: InteractionsWhereInputObjectSchema?.optional().nullable(),
})
