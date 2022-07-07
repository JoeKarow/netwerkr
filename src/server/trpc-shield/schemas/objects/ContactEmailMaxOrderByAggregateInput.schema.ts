import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const ContactEmailMaxOrderByAggregateInputObjectSchema = z.object({
	id: SortOrderSchema?.optional(),
	email: SortOrderSchema?.optional(),
	primary: SortOrderSchema?.optional(),
	label: SortOrderSchema?.optional(),
	createdAt: SortOrderSchema?.optional(),
	updatedAt: SortOrderSchema?.optional(),
	contactId: SortOrderSchema?.optional(),
})
