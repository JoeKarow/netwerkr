import { z } from 'zod'
import { UserCreateWithoutAccountsInputObjectSchema } from './UserCreateWithoutAccountsInput.schema'
import { UserUncheckedCreateWithoutAccountsInputObjectSchema } from './UserUncheckedCreateWithoutAccountsInput.schema'
import { UserCreateOrConnectWithoutAccountsInputObjectSchema } from './UserCreateOrConnectWithoutAccountsInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutAccountsInputObjectSchema = z.union([
	z.object({
		create: z
			.union([
				UserCreateWithoutAccountsInputObjectSchema,
				UserUncheckedCreateWithoutAccountsInputObjectSchema,
			])
			?.optional(),
	}),
	z.object({
		connectOrCreate:
			UserCreateOrConnectWithoutAccountsInputObjectSchema?.optional(),
	}),
	z.object({
		connect: UserWhereUniqueInputObjectSchema?.optional(),
	}),
])
