import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { BoolFilterObjectSchema } from './BoolFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

///@ts-ignore
export const ContactScalarWhereInputObjectSchema = z.object({
	id: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	firstName: z
		.union([StringNullableFilterObjectSchema, z.string().nullable()])
		?.optional(),
	lastName: z
		.union([StringNullableFilterObjectSchema, z.string().nullable()])
		?.optional(),
	photo: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	onTwitterList: z.union([BoolFilterObjectSchema, z.boolean()])?.optional(),
	associatedUserId: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	createdAt: z
		.union([DateTimeNullableFilterObjectSchema, z.date().nullable()])
		?.optional(),
	updatedAt: z
		.union([DateTimeNullableFilterObjectSchema, z.date().nullable()])
		?.optional(),
})
