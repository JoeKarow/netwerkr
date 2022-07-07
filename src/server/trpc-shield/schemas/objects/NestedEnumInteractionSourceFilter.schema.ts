import { z } from 'zod'
import { InteractionSourceSchema } from '../enums/InteractionSource.schema'

///@ts-ignore
export const NestedEnumInteractionSourceFilterObjectSchema = z.object({
	equals: InteractionSourceSchema?.optional(),
	in: InteractionSourceSchema,
	notIn: InteractionSourceSchema,
	not: z
		.union([
			InteractionSourceSchema,
			z.lazy(() => NestedEnumInteractionSourceFilterObjectSchema),
		])
		?.optional(),
})
