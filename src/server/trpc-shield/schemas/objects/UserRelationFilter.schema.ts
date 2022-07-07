import { z } from 'zod'
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

///@ts-ignore
export const UserRelationFilterObjectSchema = z.object({
	is: UserWhereInputObjectSchema?.optional(),
	isNot: UserWhereInputObjectSchema?.optional(),
})
