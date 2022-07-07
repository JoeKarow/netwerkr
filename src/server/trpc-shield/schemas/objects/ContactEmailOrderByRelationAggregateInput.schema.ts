import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const ContactEmailOrderByRelationAggregateInputObjectSchema = z.object({
	_count: SortOrderSchema?.optional(),
})
