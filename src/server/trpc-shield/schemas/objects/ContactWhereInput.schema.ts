import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { ContactEmailListRelationFilterObjectSchema } from './ContactEmailListRelationFilter.schema'
import { ContactPhoneListRelationFilterObjectSchema } from './ContactPhoneListRelationFilter.schema'
import { SocialMediaListRelationFilterObjectSchema } from './SocialMediaListRelationFilter.schema'
import { InteractionsListRelationFilterObjectSchema } from './InteractionsListRelationFilter.schema'
import { BoolFilterObjectSchema } from './BoolFilter.schema'
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema'
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

///@ts-ignore
export const ContactWhereInputObjectSchema = z.object({
	id: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	firstName: z
		.union([StringNullableFilterObjectSchema, z.string().nullable()])
		?.optional(),
	lastName: z
		.union([StringNullableFilterObjectSchema, z.string().nullable()])
		?.optional(),
	email: ContactEmailListRelationFilterObjectSchema?.optional(),
	phone: ContactPhoneListRelationFilterObjectSchema?.optional(),
	photo: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	socialMedia: SocialMediaListRelationFilterObjectSchema?.optional(),
	interactions: InteractionsListRelationFilterObjectSchema?.optional(),
	onTwitterList: z.union([BoolFilterObjectSchema, z.boolean()])?.optional(),
	associatedUser: z
		.union([UserRelationFilterObjectSchema, UserWhereInputObjectSchema])
		?.optional(),
	associatedUserId: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	profileForUser: z
		.union([
			UserRelationFilterObjectSchema,
			UserWhereInputObjectSchema.nullable(),
		])
		?.optional(),
	createdAt: z
		.union([DateTimeNullableFilterObjectSchema, z.date().nullable()])
		?.optional(),
	updatedAt: z
		.union([DateTimeNullableFilterObjectSchema, z.date().nullable()])
		?.optional(),
})
