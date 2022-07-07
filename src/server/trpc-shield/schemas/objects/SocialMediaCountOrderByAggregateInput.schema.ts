import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const SocialMediaCountOrderByAggregateInputObjectSchema = z.object({
	id: SortOrderSchema?.optional(),
	userId: SortOrderSchema?.optional(),
	displayName: SortOrderSchema?.optional(),
	username: SortOrderSchema?.optional(),
	protected: SortOrderSchema?.optional(),
	profileImg: SortOrderSchema?.optional(),
	createdAt: SortOrderSchema?.optional(),
	updatedAt: SortOrderSchema?.optional(),
	contactId: SortOrderSchema?.optional(),
	socialMediaServiceId: SortOrderSchema?.optional(),
})
