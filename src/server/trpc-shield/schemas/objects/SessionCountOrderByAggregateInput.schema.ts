import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const SessionCountOrderByAggregateInputObjectSchema = z.object({
	id: SortOrderSchema?.optional(),
	sessionToken: SortOrderSchema?.optional(),
	userId: SortOrderSchema?.optional(),
	expires: SortOrderSchema?.optional(),
})
