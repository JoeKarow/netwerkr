import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const ContactPhoneMaxOrderByAggregateInputObjectSchema = z.object({
	id: SortOrderSchema?.optional(),
	number: SortOrderSchema?.optional(),
	label: SortOrderSchema?.optional(),
	primary: SortOrderSchema?.optional(),
	contactId: SortOrderSchema?.optional(),
	createdAt: SortOrderSchema?.optional(),
	updatedAt: SortOrderSchema?.optional(),
})
