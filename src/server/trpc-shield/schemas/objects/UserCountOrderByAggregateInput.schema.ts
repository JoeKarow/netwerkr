import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const UserCountOrderByAggregateInputObjectSchema = z.object({
	id: SortOrderSchema?.optional(),
	name: SortOrderSchema?.optional(),
	email: SortOrderSchema?.optional(),
	emailVerified: SortOrderSchema?.optional(),
	image: SortOrderSchema?.optional(),
	twitterList: SortOrderSchema?.optional(),
	role: SortOrderSchema?.optional(),
	disabled: SortOrderSchema?.optional(),
	createdAt: SortOrderSchema?.optional(),
	updatedAt: SortOrderSchema?.optional(),
})
