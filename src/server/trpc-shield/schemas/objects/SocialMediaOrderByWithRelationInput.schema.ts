import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { ContactOrderByWithRelationInputObjectSchema } from './ContactOrderByWithRelationInput.schema'
import { SocialMediaServiceOrderByWithRelationInputObjectSchema } from './SocialMediaServiceOrderByWithRelationInput.schema'

export const SocialMediaOrderByWithRelationInputObjectSchema = z.object({
	id: SortOrderSchema?.optional(),
	contact: ContactOrderByWithRelationInputObjectSchema?.optional(),
	service: SocialMediaServiceOrderByWithRelationInputObjectSchema?.optional(),
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
