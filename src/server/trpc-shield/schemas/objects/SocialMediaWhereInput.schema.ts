import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { ContactRelationFilterObjectSchema } from './ContactRelationFilter.schema'
import { ContactWhereInputObjectSchema } from './ContactWhereInput.schema'
import { SocialMediaServiceRelationFilterObjectSchema } from './SocialMediaServiceRelationFilter.schema'
import { SocialMediaServiceWhereInputObjectSchema } from './SocialMediaServiceWhereInput.schema'
import { BoolFilterObjectSchema } from './BoolFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

///@ts-ignore
export const SocialMediaWhereInputObjectSchema = z.object({
	id: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	contact: z
		.union([ContactRelationFilterObjectSchema, ContactWhereInputObjectSchema])
		?.optional(),
	service: z
		.union([
			SocialMediaServiceRelationFilterObjectSchema,
			SocialMediaServiceWhereInputObjectSchema,
		])
		?.optional(),
	userId: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	displayName: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	username: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	protected: z.union([BoolFilterObjectSchema, z.boolean()])?.optional(),
	profileImg: z
		.union([StringNullableFilterObjectSchema, z.string().nullable()])
		?.optional(),
	createdAt: z
		.union([DateTimeNullableFilterObjectSchema, z.date().nullable()])
		?.optional(),
	updatedAt: z
		.union([DateTimeNullableFilterObjectSchema, z.date().nullable()])
		?.optional(),
	contactId: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	socialMediaServiceId: z
		.union([StringFilterObjectSchema, z.string()])
		?.optional(),
})
