import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

export const AccountOrderByWithRelationInputObjectSchema = z.object({
	id: SortOrderSchema?.optional(),
	userId: SortOrderSchema?.optional(),
	type: SortOrderSchema?.optional(),
	provider: SortOrderSchema?.optional(),
	providerAccountId: SortOrderSchema?.optional(),
	refresh_token: SortOrderSchema?.optional(),
	access_token: SortOrderSchema?.optional(),
	expires_at: SortOrderSchema?.optional(),
	token_type: SortOrderSchema?.optional(),
	scope: SortOrderSchema?.optional(),
	id_token: SortOrderSchema?.optional(),
	session_state: SortOrderSchema?.optional(),
	user: UserOrderByWithRelationInputObjectSchema?.optional(),
	createdAt: SortOrderSchema?.optional(),
	updatedAt: SortOrderSchema?.optional(),
})
