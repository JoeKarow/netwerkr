import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { InteractionsOrderByWithRelationInputObjectSchema } from './InteractionsOrderByWithRelationInput.schema'

export const ConversationOrderByWithRelationInputObjectSchema = z.object({
	id: SortOrderSchema?.optional(),
	twitterConvoId: SortOrderSchema?.optional(),
	Interactions: InteractionsOrderByWithRelationInputObjectSchema?.optional(),
	interactionsId: SortOrderSchema?.optional(),
})
