import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { ContactEmailOrderByRelationAggregateInputObjectSchema } from './ContactEmailOrderByRelationAggregateInput.schema'
import { ContactPhoneOrderByRelationAggregateInputObjectSchema } from './ContactPhoneOrderByRelationAggregateInput.schema'
import { SocialMediaOrderByRelationAggregateInputObjectSchema } from './SocialMediaOrderByRelationAggregateInput.schema'
import { InteractionsOrderByRelationAggregateInputObjectSchema } from './InteractionsOrderByRelationAggregateInput.schema'
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

export const ContactOrderByWithRelationInputObjectSchema = z.object({
	id: SortOrderSchema?.optional(),
	firstName: SortOrderSchema?.optional(),
	lastName: SortOrderSchema?.optional(),
	email: ContactEmailOrderByRelationAggregateInputObjectSchema?.optional(),
	phone: ContactPhoneOrderByRelationAggregateInputObjectSchema?.optional(),
	photo: SortOrderSchema?.optional(),
	socialMedia: SocialMediaOrderByRelationAggregateInputObjectSchema?.optional(),
	interactions:
		InteractionsOrderByRelationAggregateInputObjectSchema?.optional(),
	onTwitterList: SortOrderSchema?.optional(),
	associatedUser: UserOrderByWithRelationInputObjectSchema?.optional(),
	associatedUserId: SortOrderSchema?.optional(),
	profileForUser: UserOrderByWithRelationInputObjectSchema?.optional(),
	createdAt: SortOrderSchema?.optional(),
	updatedAt: SortOrderSchema?.optional(),
})
