import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { ContactCountOrderByAggregateInputObjectSchema } from './ContactCountOrderByAggregateInput.schema'
import { ContactMaxOrderByAggregateInputObjectSchema } from './ContactMaxOrderByAggregateInput.schema'
import { ContactMinOrderByAggregateInputObjectSchema } from './ContactMinOrderByAggregateInput.schema'

export const ContactOrderByWithAggregationInputObjectSchema = z.object({
	id: SortOrderSchema?.optional(),
	firstName: SortOrderSchema?.optional(),
	lastName: SortOrderSchema?.optional(),
	photo: SortOrderSchema?.optional(),
	onTwitterList: SortOrderSchema?.optional(),
	associatedUserId: SortOrderSchema?.optional(),
	createdAt: SortOrderSchema?.optional(),
	updatedAt: SortOrderSchema?.optional(),
	_count: ContactCountOrderByAggregateInputObjectSchema?.optional(),
	_max: ContactMaxOrderByAggregateInputObjectSchema?.optional(),
	_min: ContactMinOrderByAggregateInputObjectSchema?.optional(),
})
