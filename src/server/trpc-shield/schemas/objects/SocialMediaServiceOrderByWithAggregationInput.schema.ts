import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { SocialMediaServiceCountOrderByAggregateInputObjectSchema } from './SocialMediaServiceCountOrderByAggregateInput.schema'
import { SocialMediaServiceMaxOrderByAggregateInputObjectSchema } from './SocialMediaServiceMaxOrderByAggregateInput.schema'
import { SocialMediaServiceMinOrderByAggregateInputObjectSchema } from './SocialMediaServiceMinOrderByAggregateInput.schema'

export const SocialMediaServiceOrderByWithAggregationInputObjectSchema =
	z.object({
		id: SortOrderSchema?.optional(),
		name: SortOrderSchema?.optional(),
		urlbase: SortOrderSchema?.optional(),
		createdAt: SortOrderSchema?.optional(),
		updatedAt: SortOrderSchema?.optional(),
		_count:
			SocialMediaServiceCountOrderByAggregateInputObjectSchema?.optional(),
		_max: SocialMediaServiceMaxOrderByAggregateInputObjectSchema?.optional(),
		_min: SocialMediaServiceMinOrderByAggregateInputObjectSchema?.optional(),
	})
