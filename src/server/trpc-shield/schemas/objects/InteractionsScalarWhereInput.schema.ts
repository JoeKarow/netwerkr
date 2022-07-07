import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { EnumInteractionSourceFilterObjectSchema } from './EnumInteractionSourceFilter.schema'
import { InteractionSourceSchema } from '../enums/InteractionSource.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

///@ts-ignore
export const InteractionsScalarWhereInputObjectSchema = z.object({
	id: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	contactId: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	source: z
		.union([EnumInteractionSourceFilterObjectSchema, InteractionSourceSchema])
		?.optional(),
	time: z.union([DateTimeFilterObjectSchema, z.date()])?.optional(),
	content: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	extPostId: z
		.union([StringNullableFilterObjectSchema, z.string().nullable()])
		?.optional(),
	createdAt: z
		.union([DateTimeNullableFilterObjectSchema, z.date().nullable()])
		?.optional(),
	updatedAt: z
		.union([DateTimeNullableFilterObjectSchema, z.date().nullable()])
		?.optional(),
	socialMediaServiceId: z
		.union([StringNullableFilterObjectSchema, z.string().nullable()])
		?.optional(),
})
