import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { ContactEmailCountOrderByAggregateInputObjectSchema } from './ContactEmailCountOrderByAggregateInput.schema'
import { ContactEmailMaxOrderByAggregateInputObjectSchema } from './ContactEmailMaxOrderByAggregateInput.schema'
import { ContactEmailMinOrderByAggregateInputObjectSchema } from './ContactEmailMinOrderByAggregateInput.schema'

export const ContactEmailOrderByWithAggregationInputObjectSchema = z.object({
	id: SortOrderSchema?.optional(),
	email: SortOrderSchema?.optional(),
	primary: SortOrderSchema?.optional(),
	label: SortOrderSchema?.optional(),
	createdAt: SortOrderSchema?.optional(),
	updatedAt: SortOrderSchema?.optional(),
	contactId: SortOrderSchema?.optional(),
	_count: ContactEmailCountOrderByAggregateInputObjectSchema?.optional(),
	_max: ContactEmailMaxOrderByAggregateInputObjectSchema?.optional(),
	_min: ContactEmailMinOrderByAggregateInputObjectSchema?.optional(),
})
