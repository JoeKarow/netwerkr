import { z } from 'zod'
import { QueryModeSchema } from '../enums/QueryMode.schema'
import { NestedStringFilterObjectSchema } from './NestedStringFilter.schema'

///@ts-ignore
export const StringFilterObjectSchema = z.object({
	equals: z.string()?.optional(),
	in: z.array(z.string()),
	notIn: z.array(z.string()),
	lt: z.string()?.optional(),
	lte: z.string()?.optional(),
	gt: z.string()?.optional(),
	gte: z.string()?.optional(),
	contains: z.string()?.optional(),
	startsWith: z.string()?.optional(),
	endsWith: z.string()?.optional(),
	mode: QueryModeSchema?.optional(),
	not: z.union([z.string(), NestedStringFilterObjectSchema])?.optional(),
})
