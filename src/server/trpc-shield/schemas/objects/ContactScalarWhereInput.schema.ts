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
	photo: z
		.union([StringNullableFilterObjectSchema, z.string().nullable()])
		?.optional(),
	onTwitterList: z.union([BoolFilterObjectSchema, z.boolean()])?.optional(),
	createdAt: z
		.union([DateTimeNullableFilterObjectSchema, z.date().nullable()])
		?.optional(),
	associatedUserId: z
		.union([StringNullableFilterObjectSchema, z.string().nullable()])
		?.optional(),
})
