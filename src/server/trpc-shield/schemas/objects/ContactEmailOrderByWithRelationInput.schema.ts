import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { ContactOrderByWithRelationInputObjectSchema } from './ContactOrderByWithRelationInput.schema'

export const ContactEmailOrderByWithRelationInputObjectSchema = z.object({
	id: SortOrderSchema?.optional(),
	email: SortOrderSchema?.optional(),
	primary: SortOrderSchema?.optional(),
	label: SortOrderSchema?.optional(),
	contact: ContactOrderByWithRelationInputObjectSchema?.optional(),
	createdAt: SortOrderSchema?.optional(),
	updatedAt: SortOrderSchema?.optional(),
	contactId: SortOrderSchema?.optional(),
})
