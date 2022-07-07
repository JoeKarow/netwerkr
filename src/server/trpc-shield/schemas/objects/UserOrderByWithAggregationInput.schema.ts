import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { UserCountOrderByAggregateInputObjectSchema } from './UserCountOrderByAggregateInput.schema'
import { UserMaxOrderByAggregateInputObjectSchema } from './UserMaxOrderByAggregateInput.schema'
import { UserMinOrderByAggregateInputObjectSchema } from './UserMinOrderByAggregateInput.schema'

export const UserOrderByWithAggregationInputObjectSchema = z.object({
	id: SortOrderSchema?.optional(),
	name: SortOrderSchema?.optional(),
	email: SortOrderSchema?.optional(),
	emailVerified: SortOrderSchema?.optional(),
	image: SortOrderSchema?.optional(),
	twitterList: SortOrderSchema?.optional(),
	role: SortOrderSchema?.optional(),
	disabled: SortOrderSchema?.optional(),
	profileId: SortOrderSchema?.optional(),
	createdAt: SortOrderSchema?.optional(),
	updatedAt: SortOrderSchema?.optional(),
	_count: UserCountOrderByAggregateInputObjectSchema?.optional(),
	_max: UserMaxOrderByAggregateInputObjectSchema?.optional(),
	_min: UserMinOrderByAggregateInputObjectSchema?.optional(),
})
