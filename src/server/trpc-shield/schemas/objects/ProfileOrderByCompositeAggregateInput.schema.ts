import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const ProfileOrderByCompositeAggregateInputObjectSchema = z.object({
	_count: SortOrderSchema?.optional(),
})
