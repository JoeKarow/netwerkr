import { z } from 'zod'
import { RoleSchema } from '../enums/Role.schema'
import { NestedEnumRoleWithAggregatesFilterObjectSchema } from './NestedEnumRoleWithAggregatesFilter.schema'
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema'
import { NestedEnumRoleFilterObjectSchema } from './NestedEnumRoleFilter.schema'

///@ts-ignore
export const EnumRoleWithAggregatesFilterObjectSchema = z.object({
	equals: RoleSchema?.optional(),
	in: RoleSchema,
	notIn: RoleSchema,
	not: z
		.union([RoleSchema, NestedEnumRoleWithAggregatesFilterObjectSchema])
		?.optional(),
	_count: NestedIntFilterObjectSchema?.optional(),
	_min: NestedEnumRoleFilterObjectSchema?.optional(),
	_max: NestedEnumRoleFilterObjectSchema?.optional(),
})
