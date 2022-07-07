import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { ConversationOrderByCompositeAggregateInputObjectSchema } from './ConversationOrderByCompositeAggregateInput.schema'

export const InteractionsOrderByInputObjectSchema = z.object({
	source: SortOrderSchema?.optional(),
	sourceSocial: SortOrderSchema?.optional(),
	time: SortOrderSchema?.optional(),
	content: SortOrderSchema?.optional(),
	extPostId: SortOrderSchema?.optional(),
	conversation:
		ConversationOrderByCompositeAggregateInputObjectSchema?.optional(),
	createdAt: SortOrderSchema?.optional(),
})
