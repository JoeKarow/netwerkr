import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { ContactOrderByWithRelationInputObjectSchema } from './ContactOrderByWithRelationInput.schema'
import { SocialMediaServiceOrderByWithRelationInputObjectSchema } from './SocialMediaServiceOrderByWithRelationInput.schema'
import { ConversationOrderByRelationAggregateInputObjectSchema } from './ConversationOrderByRelationAggregateInput.schema'

export const InteractionsOrderByWithRelationInputObjectSchema = z.object({
	id: SortOrderSchema?.optional(),
	Contact: ContactOrderByWithRelationInputObjectSchema?.optional(),
	contactId: SortOrderSchema?.optional(),
	source: SortOrderSchema?.optional(),
	sourceSocial:
		SocialMediaServiceOrderByWithRelationInputObjectSchema?.optional(),
	time: SortOrderSchema?.optional(),
	content: SortOrderSchema?.optional(),
	extPostId: SortOrderSchema?.optional(),
	conversationId:
		ConversationOrderByRelationAggregateInputObjectSchema?.optional(),
	createdAt: SortOrderSchema?.optional(),
	updatedAt: SortOrderSchema?.optional(),
	socialMediaServiceId: SortOrderSchema?.optional(),
})
