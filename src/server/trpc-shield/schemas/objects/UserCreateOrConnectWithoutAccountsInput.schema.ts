import { z } from 'zod'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserCreateWithoutAccountsInputObjectSchema } from './UserCreateWithoutAccountsInput.schema'
import { UserUncheckedCreateWithoutAccountsInputObjectSchema } from './UserUncheckedCreateWithoutAccountsInput.schema'

export const UserCreateOrConnectWithoutAccountsInputObjectSchema = z.object({
	where: UserWhereUniqueInputObjectSchema,
	create: z.union([
		UserCreateWithoutAccountsInputObjectSchema,
		UserUncheckedCreateWithoutAccountsInputObjectSchema,
	]),
})
