import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { EmailOrderByInputObjectSchema } from './EmailOrderByInput.schema'
import { PhoneOrderByInputObjectSchema } from './PhoneOrderByInput.schema'
import { SocialMediaOrderByCompositeAggregateInputObjectSchema } from './SocialMediaOrderByCompositeAggregateInput.schema'
import { InteractionsOrderByInputObjectSchema } from './InteractionsOrderByInput.schema'
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

export const ContactOrderByWithRelationInputObjectSchema = z.object({
	id: SortOrderSchema?.optional(),
	firstName: SortOrderSchema?.optional(),
	lastName: SortOrderSchema?.optional(),
	email: EmailOrderByInputObjectSchema?.optional(),
	phone: PhoneOrderByInputObjectSchema?.optional(),
	photo: SortOrderSchema?.optional(),
	socialMedia:
		SocialMediaOrderByCompositeAggregateInputObjectSchema?.optional(),
	interactions: InteractionsOrderByInputObjectSchema?.optional(),
	onTwitterList: SortOrderSchema?.optional(),
	createdAt: SortOrderSchema?.optional(),
	associatedUser: UserOrderByWithRelationInputObjectSchema?.optional(),
	associatedUserId: SortOrderSchema?.optional(),
})
