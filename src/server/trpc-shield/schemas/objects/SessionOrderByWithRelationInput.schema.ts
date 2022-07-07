import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

export const SessionOrderByWithRelationInputObjectSchema = z.object({
	id: SortOrderSchema?.optional(),
	sessionToken: SortOrderSchema?.optional(),
	userId: SortOrderSchema?.optional(),
	expires: SortOrderSchema?.optional(),
	user: UserOrderByWithRelationInputObjectSchema?.optional(),
})
