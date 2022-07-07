import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const InteractionsCountOrderByAggregateInputObjectSchema = z.object({
	id: SortOrderSchema?.optional(),
	contactId: SortOrderSchema?.optional(),
	source: SortOrderSchema?.optional(),
	time: SortOrderSchema?.optional(),
	content: SortOrderSchema?.optional(),
	extPostId: SortOrderSchema?.optional(),
	createdAt: SortOrderSchema?.optional(),
	updatedAt: SortOrderSchema?.optional(),
	socialMediaServiceId: SortOrderSchema?.optional(),
})
