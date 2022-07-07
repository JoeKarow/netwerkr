import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { ContactRelationFilterObjectSchema } from './ContactRelationFilter.schema'
import { ContactWhereInputObjectSchema } from './ContactWhereInput.schema'
import { EnumInteractionSourceFilterObjectSchema } from './EnumInteractionSourceFilter.schema'
import { InteractionSourceSchema } from '../enums/InteractionSource.schema'
import { SocialMediaServiceRelationFilterObjectSchema } from './SocialMediaServiceRelationFilter.schema'
import { SocialMediaServiceWhereInputObjectSchema } from './SocialMediaServiceWhereInput.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { ConversationListRelationFilterObjectSchema } from './ConversationListRelationFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

///@ts-ignore
export const InteractionsWhereInputObjectSchema = z.object({
	id: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	Contact: z
		.union([ContactRelationFilterObjectSchema, ContactWhereInputObjectSchema])
		?.optional(),
	contactId: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	source: z
		.union([EnumInteractionSourceFilterObjectSchema, InteractionSourceSchema])
		?.optional(),
	sourceSocial: z
		.union([
			SocialMediaServiceRelationFilterObjectSchema,
			SocialMediaServiceWhereInputObjectSchema.nullable(),
		])
		?.optional(),
	time: z.union([DateTimeFilterObjectSchema, z.date()])?.optional(),
	content: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	extPostId: z
		.union([StringNullableFilterObjectSchema, z.string().nullable()])
		?.optional(),
	conversationId: ConversationListRelationFilterObjectSchema?.optional(),
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
