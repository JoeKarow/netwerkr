import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const ConversationCountOrderByAggregateInputObjectSchema = z.object({
	id: SortOrderSchema?.optional(),
	twitterConvoId: SortOrderSchema?.optional(),
	interactionsId: SortOrderSchema?.optional(),
})
