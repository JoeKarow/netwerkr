import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const AccountOrderByRelationAggregateInputObjectSchema = z.object({
	_count: SortOrderSchema?.optional(),
})
