import { z } from 'zod'
import { InteractionSourceSchema } from '../enums/InteractionSource.schema'
import { NestedEnumInteractionSourceWithAggregatesFilterObjectSchema } from './NestedEnumInteractionSourceWithAggregatesFilter.schema'
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema'
import { NestedEnumInteractionSourceFilterObjectSchema } from './NestedEnumInteractionSourceFilter.schema'

///@ts-ignore
export const EnumInteractionSourceWithAggregatesFilterObjectSchema = z.object({
	equals: InteractionSourceSchema?.optional(),
	in: InteractionSourceSchema,
	notIn: InteractionSourceSchema,
	not: z
		.union([
			InteractionSourceSchema,
			NestedEnumInteractionSourceWithAggregatesFilterObjectSchema,
		])
		?.optional(),
	_count: NestedIntFilterObjectSchema?.optional(),
	_min: NestedEnumInteractionSourceFilterObjectSchema?.optional(),
	_max: NestedEnumInteractionSourceFilterObjectSchema?.optional(),
})
