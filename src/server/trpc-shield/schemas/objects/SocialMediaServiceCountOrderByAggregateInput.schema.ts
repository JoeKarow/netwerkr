import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const SocialMediaServiceCountOrderByAggregateInputObjectSchema =
	z.object({
		id: SortOrderSchema?.optional(),
		name: SortOrderSchema?.optional(),
		urlbase: SortOrderSchema?.optional(),
		createdAt: SortOrderSchema?.optional(),
		updatedAt: SortOrderSchema?.optional(),
	})
