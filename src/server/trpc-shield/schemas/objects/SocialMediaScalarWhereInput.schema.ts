import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { BoolFilterObjectSchema } from './BoolFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

///@ts-ignore
export const SocialMediaScalarWhereInputObjectSchema = z.object({
	id: z.union([StringFilterObjectSchema, z.string()])?.optional(),
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
