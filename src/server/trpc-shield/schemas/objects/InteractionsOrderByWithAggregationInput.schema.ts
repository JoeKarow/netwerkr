import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { InteractionsCountOrderByAggregateInputObjectSchema } from './InteractionsCountOrderByAggregateInput.schema'
import { InteractionsMaxOrderByAggregateInputObjectSchema } from './InteractionsMaxOrderByAggregateInput.schema'
import { InteractionsMinOrderByAggregateInputObjectSchema } from './InteractionsMinOrderByAggregateInput.schema'

export const InteractionsOrderByWithAggregationInputObjectSchema = z.object({
	id: SortOrderSchema?.optional(),
	contactId: SortOrderSchema?.optional(),
	source: SortOrderSchema?.optional(),
	time: SortOrderSchema?.optional(),
	content: SortOrderSchema?.optional(),
	extPostId: SortOrderSchema?.optional(),
	createdAt: SortOrderSchema?.optional(),
	updatedAt: SortOrderSchema?.optional(),
	socialMediaServiceId: SortOrderSchema?.optional(),
	_count: InteractionsCountOrderByAggregateInputObjectSchema?.optional(),
	_max: InteractionsMaxOrderByAggregateInputObjectSchema?.optional(),
	_min: InteractionsMinOrderByAggregateInputObjectSchema?.optional(),
})
