import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { EmailNullableCompositeFilterObjectSchema } from './EmailNullableCompositeFilter.schema'
import { EmailObjectEqualityInputObjectSchema } from './EmailObjectEqualityInput.schema'
import { PhoneNullableCompositeFilterObjectSchema } from './PhoneNullableCompositeFilter.schema'
import { PhoneObjectEqualityInputObjectSchema } from './PhoneObjectEqualityInput.schema'
import { SocialMediaCompositeListFilterObjectSchema } from './SocialMediaCompositeListFilter.schema'
import { SocialMediaObjectEqualityInputObjectSchema } from './SocialMediaObjectEqualityInput.schema'
import { InteractionsNullableCompositeFilterObjectSchema } from './InteractionsNullableCompositeFilter.schema'
import { InteractionsObjectEqualityInputObjectSchema } from './InteractionsObjectEqualityInput.schema'
import { BoolFilterObjectSchema } from './BoolFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema'
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

///@ts-ignore
export const ContactWhereInputObjectSchema = z.object({
	id: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	// firstName: z
	// 	.union([StringNullableFilterObjectSchema, z.string().nullable()])
	// 	?.optional(),
	// lastName: z
	// 	.union([StringNullableFilterObjectSchema, z.string().nullable()])
	// 	?.optional(),
	// email: z
	// 	.union([
	// 		EmailNullableCompositeFilterObjectSchema,
	// 		EmailObjectEqualityInputObjectSchema.nullable(),
	// 	])
	// 	?.optional(),
	// phone: z
	// 	.union([
	// 		PhoneNullableCompositeFilterObjectSchema,
	// 		PhoneObjectEqualityInputObjectSchema.nullable(),
	// 	])
	// 	?.optional(),
	// photo: z
	// 	.union([StringNullableFilterObjectSchema, z.string().nullable()])
	// 	?.optional(),
	// socialMedia: z
	// 	.union([
	// 		SocialMediaCompositeListFilterObjectSchema,
	// 		z.array(SocialMediaObjectEqualityInputObjectSchema),
	// 	])
	// 	?.optional(),
	// interactions: z
	// 	.union([
	// 		InteractionsNullableCompositeFilterObjectSchema,
	// 		InteractionsObjectEqualityInputObjectSchema.nullable(),
	// 	])
	// 	?.optional(),
	// onTwitterList: z.union([BoolFilterObjectSchema, z.boolean()])?.optional(),
	// createdAt: z
	// 	.union([DateTimeNullableFilterObjectSchema, z.date().nullable()])
	// 	?.optional(),
	// associatedUser: z
	// 	.union([
	// 		UserRelationFilterObjectSchema,
	// 		UserWhereInputObjectSchema.nullable(),
	// 	])
	// 	?.optional(),
	// associatedUserId: z
	// 	.union([StringNullableFilterObjectSchema, z.string().nullable()])
	// 	?.optional(),
})
