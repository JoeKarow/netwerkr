import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { ConversationCountOrderByAggregateInputObjectSchema } from './ConversationCountOrderByAggregateInput.schema'
import { ConversationMaxOrderByAggregateInputObjectSchema } from './ConversationMaxOrderByAggregateInput.schema'
import { ConversationMinOrderByAggregateInputObjectSchema } from './ConversationMinOrderByAggregateInput.schema'

export const ConversationOrderByWithAggregationInputObjectSchema = z.object({
	id: SortOrderSchema?.optional(),
	twitterConvoId: SortOrderSchema?.optional(),
	interactionsId: SortOrderSchema?.optional(),
	_count: ConversationCountOrderByAggregateInputObjectSchema?.optional(),
	_max: ConversationMaxOrderByAggregateInputObjectSchema?.optional(),
	_min: ConversationMinOrderByAggregateInputObjectSchema?.optional(),
})
