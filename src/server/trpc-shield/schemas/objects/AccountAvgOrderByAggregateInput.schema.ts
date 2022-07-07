import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const AccountAvgOrderByAggregateInputObjectSchema = z.object({
	expires_at: SortOrderSchema?.optional(),
})
