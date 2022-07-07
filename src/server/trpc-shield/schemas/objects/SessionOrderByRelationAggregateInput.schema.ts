import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const SessionOrderByRelationAggregateInputObjectSchema = z.object({
	_count: SortOrderSchema?.optional(),
})
