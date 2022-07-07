import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const SocialMediaOrderByCompositeAggregateInputObjectSchema = z.object({
	_count: SortOrderSchema?.optional(),
})
