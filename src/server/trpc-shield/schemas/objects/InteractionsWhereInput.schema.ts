import { z } from 'zod'
import { EnumInteractionSourceFilterObjectSchema } from './EnumInteractionSourceFilter.schema'
import { InteractionSourceSchema } from '../enums/InteractionSource.schema'
import { JsonFilterObjectSchema } from './JsonFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { ConversationCompositeListFilterObjectSchema } from './ConversationCompositeListFilter.schema'
import { ConversationObjectEqualityInputObjectSchema } from './ConversationObjectEqualityInput.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

///@ts-ignore
export const InteractionsWhereInputObjectSchema = z.object({
	source: z
		.union([EnumInteractionSourceFilterObjectSchema, InteractionSourceSchema])
		?.optional(),
	sourceSocial: JsonFilterObjectSchema?.optional(),
	time: z.union([DateTimeFilterObjectSchema, z.date()])?.optional(),
	content: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	extPostId: z
		.union([StringNullableFilterObjectSchema, z.string().nullable()])
		?.optional(),
	conversation: z
		.union([
			ConversationCompositeListFilterObjectSchema,
			z.array(ConversationObjectEqualityInputObjectSchema),
		])
		?.optional(),
	createdAt: z
		.union([DateTimeNullableFilterObjectSchema, z.date().nullable()])
		?.optional(),
})
