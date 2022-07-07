import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { ContactOrderByWithRelationInputObjectSchema } from './ContactOrderByWithRelationInput.schema'

export const ContactPhoneOrderByWithRelationInputObjectSchema = z.object({
	id: SortOrderSchema?.optional(),
	number: SortOrderSchema?.optional(),
	label: SortOrderSchema?.optional(),
	primary: SortOrderSchema?.optional(),
	contact: ContactOrderByWithRelationInputObjectSchema?.optional(),
	contactId: SortOrderSchema?.optional(),
	createdAt: SortOrderSchema?.optional(),
	updatedAt: SortOrderSchema?.optional(),
})
