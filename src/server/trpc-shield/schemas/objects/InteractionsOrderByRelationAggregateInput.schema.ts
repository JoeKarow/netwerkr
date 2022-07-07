import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const InteractionsOrderByRelationAggregateInputObjectSchema = z.object({
	_count: SortOrderSchema?.optional(),
})
