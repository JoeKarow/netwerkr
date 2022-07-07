import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const SocialMediaOrderByRelationAggregateInputObjectSchema = z.object({
	_count: SortOrderSchema?.optional(),
})
