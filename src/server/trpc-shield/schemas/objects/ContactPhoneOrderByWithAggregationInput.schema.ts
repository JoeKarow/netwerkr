import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { ContactPhoneCountOrderByAggregateInputObjectSchema } from './ContactPhoneCountOrderByAggregateInput.schema'
import { ContactPhoneMaxOrderByAggregateInputObjectSchema } from './ContactPhoneMaxOrderByAggregateInput.schema'
import { ContactPhoneMinOrderByAggregateInputObjectSchema } from './ContactPhoneMinOrderByAggregateInput.schema'

export const ContactPhoneOrderByWithAggregationInputObjectSchema = z.object({
	id: SortOrderSchema?.optional(),
	number: SortOrderSchema?.optional(),
	label: SortOrderSchema?.optional(),
	primary: SortOrderSchema?.optional(),
	contactId: SortOrderSchema?.optional(),
	createdAt: SortOrderSchema?.optional(),
	updatedAt: SortOrderSchema?.optional(),
	_count: ContactPhoneCountOrderByAggregateInputObjectSchema?.optional(),
	_max: ContactPhoneMaxOrderByAggregateInputObjectSchema?.optional(),
	_min: ContactPhoneMinOrderByAggregateInputObjectSchema?.optional(),
})
