import { z } from 'zod'
import { RoleSchema } from '../enums/Role.schema'
import { NestedEnumRoleFilterObjectSchema } from './NestedEnumRoleFilter.schema'

///@ts-ignore
export const EnumRoleFilterObjectSchema = z.object({
	equals: RoleSchema?.optional(),
	in: RoleSchema,
	notIn: RoleSchema,
	not: z.union([RoleSchema, NestedEnumRoleFilterObjectSchema])?.optional(),
})
