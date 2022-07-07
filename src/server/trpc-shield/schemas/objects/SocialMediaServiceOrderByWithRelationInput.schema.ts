import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { InteractionsOrderByRelationAggregateInputObjectSchema } from './InteractionsOrderByRelationAggregateInput.schema'
import { SocialMediaOrderByRelationAggregateInputObjectSchema } from './SocialMediaOrderByRelationAggregateInput.schema'

export const SocialMediaServiceOrderByWithRelationInputObjectSchema = z.object({
	id: SortOrderSchema?.optional(),
	name: SortOrderSchema?.optional(),
	urlbase: SortOrderSchema?.optional(),
	Interactions:
		InteractionsOrderByRelationAggregateInputObjectSchema?.optional(),
	SocialMedia: SocialMediaOrderByRelationAggregateInputObjectSchema?.optional(),
})
