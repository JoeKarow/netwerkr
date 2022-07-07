import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const ContactMinOrderByAggregateInputObjectSchema = z.object({
	id: SortOrderSchema?.optional(),
	firstName: SortOrderSchema?.optional(),
	lastName: SortOrderSchema?.optional(),
	photo: SortOrderSchema?.optional(),
	onTwitterList: SortOrderSchema?.optional(),
	associatedUserId: SortOrderSchema?.optional(),
	createdAt: SortOrderSchema?.optional(),
	updatedAt: SortOrderSchema?.optional(),
})