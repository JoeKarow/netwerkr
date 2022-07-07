import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema'
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

///@ts-ignore
export const SessionWhereInputObjectSchema = z.object({
	id: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	sessionToken: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	userId: z.union([StringFilterObjectSchema, z.string()])?.optional(),
	expires: z.union([DateTimeFilterObjectSchema, z.date()])?.optional(),
	user: z
		.union([UserRelationFilterObjectSchema, UserWhereInputObjectSchema])
		?.optional(),
})
