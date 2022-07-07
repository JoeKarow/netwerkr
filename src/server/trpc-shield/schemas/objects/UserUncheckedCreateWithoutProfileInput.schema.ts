import { z } from 'zod'
import { RoleSchema } from '../enums/Role.schema'
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema'
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema'
import { ContactUncheckedCreateNestedManyWithoutAssociatedUserInputObjectSchema } from './ContactUncheckedCreateNestedManyWithoutAssociatedUserInput.schema'

export const UserUncheckedCreateWithoutProfileInputObjectSchema = z.object({
	id: z.string()?.optional(),
	name: z.string()?.optional().nullable(),
	email: z.string()?.optional().nullable(),
	emailVerified: z.date()?.optional().nullable(),
	image: z.string()?.optional().nullable(),
	twitterList: z.string()?.optional().nullable(),
	role: RoleSchema?.optional(),
	disabled: z.boolean()?.optional().nullable(),
	accounts:
		AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema?.optional(),
	sessions:
		SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema?.optional(),
	contacts:
		ContactUncheckedCreateNestedManyWithoutAssociatedUserInputObjectSchema?.optional(),
	createdAt: z.date()?.optional().nullable(),
	updatedAt: z.date()?.optional().nullable(),
})
