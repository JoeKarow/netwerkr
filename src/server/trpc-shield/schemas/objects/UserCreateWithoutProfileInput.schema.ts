import { z } from 'zod'
import { RoleSchema } from '../enums/Role.schema'
import { AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema'
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema'
import { ContactCreateNestedManyWithoutAssociatedUserInputObjectSchema } from './ContactCreateNestedManyWithoutAssociatedUserInput.schema'

export const UserCreateWithoutProfileInputObjectSchema = z.object({
	id: z.string()?.optional(),
	name: z.string()?.optional().nullable(),
	email: z.string()?.optional().nullable(),
	emailVerified: z.date()?.optional().nullable(),
	image: z.string()?.optional().nullable(),
	twitterList: z.string()?.optional().nullable(),
	role: RoleSchema?.optional(),
	disabled: z.boolean()?.optional().nullable(),
	accounts: AccountCreateNestedManyWithoutUserInputObjectSchema?.optional(),
	sessions: SessionCreateNestedManyWithoutUserInputObjectSchema?.optional(),
	contacts:
		ContactCreateNestedManyWithoutAssociatedUserInputObjectSchema?.optional(),
	createdAt: z.date()?.optional().nullable(),
	updatedAt: z.date()?.optional().nullable(),
})
