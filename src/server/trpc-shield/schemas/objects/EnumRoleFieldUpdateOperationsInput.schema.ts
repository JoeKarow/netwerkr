import { z } from 'zod'
import { RoleSchema } from '../enums/Role.schema'

export const EnumRoleFieldUpdateOperationsInputObjectSchema = z.object({
	set: RoleSchema?.optional(),
})
