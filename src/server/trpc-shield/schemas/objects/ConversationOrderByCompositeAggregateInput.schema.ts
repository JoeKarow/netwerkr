import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const ConversationOrderByCompositeAggregateInputObjectSchema = z.object({
	_count: SortOrderSchema?.optional(),
})
