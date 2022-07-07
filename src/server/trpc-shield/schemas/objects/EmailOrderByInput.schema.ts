import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const EmailOrderByInputObjectSchema = z.object({
	email: SortOrderSchema?.optional(),
	primary: SortOrderSchema?.optional(),
	label: SortOrderSchema?.optional(),
	createdAt: SortOrderSchema?.optional(),
})
