import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const AccountSumOrderByAggregateInputObjectSchema = z.object({
	expires_at: SortOrderSchema?.optional(),
})
