import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const ContactPhoneOrderByRelationAggregateInputObjectSchema = z.object({
	_count: SortOrderSchema?.optional(),
})
