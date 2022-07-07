import { z } from 'zod'
import { RoleSchema } from '../enums/Role.schema'

///@ts-ignore
export const NestedEnumRoleFilterObjectSchema = z.object({
	equals: RoleSchema?.optional(),
	in: RoleSchema,
	notIn: RoleSchema,
	not: z
		.union([RoleSchema, z.lazy(() => NestedEnumRoleFilterObjectSchema)])
		?.optional(),
})
