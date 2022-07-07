import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const PhoneOrderByInputObjectSchema = z.object({
	number: SortOrderSchema?.optional(),
	label: SortOrderSchema?.optional(),
	primary: SortOrderSchema?.optional(),
	createdAt: SortOrderSchema?.optional(),
})
