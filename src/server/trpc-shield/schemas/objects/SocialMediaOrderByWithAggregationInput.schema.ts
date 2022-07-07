import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { SocialMediaCountOrderByAggregateInputObjectSchema } from './SocialMediaCountOrderByAggregateInput.schema'
import { SocialMediaMaxOrderByAggregateInputObjectSchema } from './SocialMediaMaxOrderByAggregateInput.schema'
import { SocialMediaMinOrderByAggregateInputObjectSchema } from './SocialMediaMinOrderByAggregateInput.schema'

export const SocialMediaOrderByWithAggregationInputObjectSchema = z.object({
	id: SortOrderSchema?.optional(),
	userId: SortOrderSchema?.optional(),
	displayName: SortOrderSchema?.optional(),
	username: SortOrderSchema?.optional(),
	protected: SortOrderSchema?.optional(),
	profileImg: SortOrderSchema?.optional(),
	createdAt: SortOrderSchema?.optional(),
	updatedAt: SortOrderSchema?.optional(),
	contactId: SortOrderSchema?.optional(),
	socialMediaServiceId: SortOrderSchema?.optional(),
	_count: SocialMediaCountOrderByAggregateInputObjectSchema?.optional(),
	_max: SocialMediaMaxOrderByAggregateInputObjectSchema?.optional(),
	_min: SocialMediaMinOrderByAggregateInputObjectSchema?.optional(),
})
