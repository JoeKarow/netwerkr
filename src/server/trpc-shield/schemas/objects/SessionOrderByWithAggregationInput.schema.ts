import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { SessionCountOrderByAggregateInputObjectSchema } from './SessionCountOrderByAggregateInput.schema'
import { SessionMaxOrderByAggregateInputObjectSchema } from './SessionMaxOrderByAggregateInput.schema'
import { SessionMinOrderByAggregateInputObjectSchema } from './SessionMinOrderByAggregateInput.schema'

export const SessionOrderByWithAggregationInputObjectSchema = z.object({
	id: SortOrderSchema?.optional(),
	sessionToken: SortOrderSchema?.optional(),
	userId: SortOrderSchema?.optional(),
	expires: SortOrderSchema?.optional(),
	_count: SessionCountOrderByAggregateInputObjectSchema?.optional(),
	_max: SessionMaxOrderByAggregateInputObjectSchema?.optional(),
	_min: SessionMinOrderByAggregateInputObjectSchema?.optional(),
})
