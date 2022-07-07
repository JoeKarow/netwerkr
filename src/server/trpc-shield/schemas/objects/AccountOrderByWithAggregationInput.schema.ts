import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { AccountCountOrderByAggregateInputObjectSchema } from './AccountCountOrderByAggregateInput.schema'
import { AccountAvgOrderByAggregateInputObjectSchema } from './AccountAvgOrderByAggregateInput.schema'
import { AccountMaxOrderByAggregateInputObjectSchema } from './AccountMaxOrderByAggregateInput.schema'
import { AccountMinOrderByAggregateInputObjectSchema } from './AccountMinOrderByAggregateInput.schema'
import { AccountSumOrderByAggregateInputObjectSchema } from './AccountSumOrderByAggregateInput.schema'

export const AccountOrderByWithAggregationInputObjectSchema = z.object({
	id: SortOrderSchema?.optional(),
	userId: SortOrderSchema?.optional(),
	type: SortOrderSchema?.optional(),
	provider: SortOrderSchema?.optional(),
	providerAccountId: SortOrderSchema?.optional(),
	refresh_token: SortOrderSchema?.optional(),
	access_token: SortOrderSchema?.optional(),
	expires_at: SortOrderSchema?.optional(),
	token_type: SortOrderSchema?.optional(),
	scope: SortOrderSchema?.optional(),
	id_token: SortOrderSchema?.optional(),
	session_state: SortOrderSchema?.optional(),
	createdAt: SortOrderSchema?.optional(),
	updatedAt: SortOrderSchema?.optional(),
	_count: AccountCountOrderByAggregateInputObjectSchema?.optional(),
	_avg: AccountAvgOrderByAggregateInputObjectSchema?.optional(),
	_max: AccountMaxOrderByAggregateInputObjectSchema?.optional(),
	_min: AccountMinOrderByAggregateInputObjectSchema?.optional(),
	_sum: AccountSumOrderByAggregateInputObjectSchema?.optional(),
})
