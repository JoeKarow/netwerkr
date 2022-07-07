import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const ContactMaxOrderByAggregateInputObjectSchema = z.object({
	id: SortOrderSchema?.optional(),
	firstName: SortOrderSchema?.optional(),
	lastName: SortOrderSchema?.optional(),
	photo: SortOrderSchema?.optional(),
	onTwitterList: SortOrderSchema?.optional(),
	createdAt: SortOrderSchema?.optional(),
	associatedUserId: SortOrderSchema?.optional(),
})
