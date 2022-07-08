import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'
import { EnumRoleFilterObjectSchema } from './EnumRoleFilter.schema'
import { RoleSchema } from '../enums/Role.schema'
import { BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema'
import { AccountListRelationFilterObjectSchema } from './AccountListRelationFilter.schema'
import { SessionListRelationFilterObjectSchema } from './SessionListRelationFilter.schema'
import { ContactListRelationFilterObjectSchema } from './ContactListRelationFilter.schema'
import { ProfileCompositeListFilterObjectSchema } from './ProfileCompositeListFilter.schema'
import { ProfileObjectEqualityInputObjectSchema } from './ProfileObjectEqualityInput.schema'

export const UserWhereInputObjectSchema = z.object({
	id: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	name: z
		.union([StringNullableFilterObjectSchema, z.string().nullable()])
		?.optional(),
	email: z
		.union([StringNullableFilterObjectSchema, z.string().nullable()])
		?.optional(),
	emailVerified: z
		.union([DateTimeNullableFilterObjectSchema, z.date().nullable()])
		?.optional(),
	image: z
		.union([StringNullableFilterObjectSchema, z.string().nullable()])
		?.optional(),
	twitterList: z
		.union([StringNullableFilterObjectSchema, z.string().nullable()])
		?.optional(),
	role: z.union([EnumRoleFilterObjectSchema, RoleSchema])?.optional(),
	disabled: z
		.union([BoolNullableFilterObjectSchema, z.boolean().nullable()])
		?.optional(),
	// accounts: AccountListRelationFilterObjectSchema?.optional(),
	// sessions: SessionListRelationFilterObjectSchema?.optional(),
	// contacts: ContactListRelationFilterObjectSchema?.optional(),
	// profile: z
	// 	.union([
	// 		ProfileCompositeListFilterObjectSchema,
	// 		z.array(ProfileObjectEqualityInputObjectSchema),
	// 	])
	// 	?.optional(),
	// createdAt: z
	// 	.union([DateTimeNullableFilterObjectSchema, z.date().nullable()])
	// 	?.optional(),
	// updatedAt: z
	// 	.union([DateTimeNullableFilterObjectSchema, z.date().nullable()])
	// 	?.optional(),
})
