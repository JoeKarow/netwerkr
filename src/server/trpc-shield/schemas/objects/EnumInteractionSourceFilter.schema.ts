import { z } from 'zod'
import { InteractionSourceSchema } from '../enums/InteractionSource.schema'
import { NestedEnumInteractionSourceFilterObjectSchema } from './NestedEnumInteractionSourceFilter.schema'

///@ts-ignore
export const EnumInteractionSourceFilterObjectSchema = z.object({
	equals: InteractionSourceSchema?.optional(),
	in: InteractionSourceSchema,
	notIn: InteractionSourceSchema,
	not: z
		.union([
			InteractionSourceSchema,
			NestedEnumInteractionSourceFilterObjectSchema,
		])
		?.optional(),
})
