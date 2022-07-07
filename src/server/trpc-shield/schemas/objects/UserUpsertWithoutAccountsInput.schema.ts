import { z } from 'zod'
import { UserUpdateWithoutAccountsInputObjectSchema } from './UserUpdateWithoutAccountsInput.schema'
import { UserUncheckedUpdateWithoutAccountsInputObjectSchema } from './UserUncheckedUpdateWithoutAccountsInput.schema'
import { UserCreateWithoutAccountsInputObjectSchema } from './UserCreateWithoutAccountsInput.schema'
import { UserUncheckedCreateWithoutAccountsInputObjectSchema } from './UserUncheckedCreateWithoutAccountsInput.schema'

export const UserUpsertWithoutAccountsInputObjectSchema = z.object({
	update: z.union([
		UserUpdateWithoutAccountsInputObjectSchema,
		UserUncheckedUpdateWithoutAccountsInputObjectSchema,
	]),
	create: z.union([
		UserCreateWithoutAccountsInputObjectSchema,
		UserUncheckedCreateWithoutAccountsInputObjectSchema,
	]),
})
