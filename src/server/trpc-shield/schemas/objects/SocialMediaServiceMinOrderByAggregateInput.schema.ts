import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const SocialMediaServiceMinOrderByAggregateInputObjectSchema = z.object({
	id: SortOrderSchema?.optional(),
	name: SortOrderSchema?.optional(),
	urlbase: SortOrderSchema?.optional(),
})
