import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { EmailCompositeListFilterObjectSchema } from './EmailCompositeListFilter.schema'
import { EmailObjectEqualityInputObjectSchema } from './EmailObjectEqualityInput.schema'
import { PhoneNullableCompositeFilterObjectSchema } from './PhoneNullableCompositeFilter.schema'
import { PhoneObjectEqualityInputObjectSchema } from './PhoneObjectEqualityInput.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { SocialMediaCompositeListFilterObjectSchema } from './SocialMediaCompositeListFilter.schema'
import { SocialMediaObjectEqualityInputObjectSchema } from './SocialMediaObjectEqualityInput.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

///@ts-ignore
export const ProfileWhereInputObjectSchema = z.object({
	firstName: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	lastName: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	email: z
		.union([
			EmailCompositeListFilterObjectSchema,
			z.array(EmailObjectEqualityInputObjectSchema),
		])
		?.optional(),
	phone: z
		.union([
			PhoneNullableCompositeFilterObjectSchema,
			PhoneObjectEqualityInputObjectSchema.nullable(),
		])
		?.optional(),
	photo: z
		.union([StringNullableFilterObjectSchema, z.string().nullable()])
		?.optional(),
	socialMedia: z
		.union([
			SocialMediaCompositeListFilterObjectSchema,
			z.array(SocialMediaObjectEqualityInputObjectSchema),
		])
		?.optional(),
	createdAt: z
		.union([DateTimeNullableFilterObjectSchema, z.date().nullable()])
		?.optional(),
})
