import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const ConversationOrderByRelationAggregateInputObjectSchema = z.object({
	_count: SortOrderSchema?.optional(),
})
