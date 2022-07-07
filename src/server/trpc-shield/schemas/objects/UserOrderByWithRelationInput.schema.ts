import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { AccountOrderByRelationAggregateInputObjectSchema } from './AccountOrderByRelationAggregateInput.schema'
import { SessionOrderByRelationAggregateInputObjectSchema } from './SessionOrderByRelationAggregateInput.schema'
import { ContactOrderByRelationAggregateInputObjectSchema } from './ContactOrderByRelationAggregateInput.schema'
import { ContactOrderByWithRelationInputObjectSchema } from './ContactOrderByWithRelationInput.schema'

export const UserOrderByWithRelationInputObjectSchema = z.object({
	id: SortOrderSchema?.optional(),
	name: SortOrderSchema?.optional(),
	email: SortOrderSchema?.optional(),
	emailVerified: SortOrderSchema?.optional(),
	image: SortOrderSchema?.optional(),
	twitterList: SortOrderSchema?.optional(),
	role: SortOrderSchema?.optional(),
	disabled: SortOrderSchema?.optional(),
	accounts: AccountOrderByRelationAggregateInputObjectSchema?.optional(),
	sessions: SessionOrderByRelationAggregateInputObjectSchema?.optional(),
	contacts: ContactOrderByRelationAggregateInputObjectSchema?.optional(),
	profile: ContactOrderByWithRelationInputObjectSchema?.optional(),
	profileId: SortOrderSchema?.optional(),
	createdAt: SortOrderSchema?.optional(),
	updatedAt: SortOrderSchema?.optional(),
})
