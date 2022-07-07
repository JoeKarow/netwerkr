import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const ContactOrderByRelationAggregateInputObjectSchema = z.object({
	_count: SortOrderSchema?.optional(),
})
