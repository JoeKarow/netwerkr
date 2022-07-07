import { z } from 'zod'
import { UserCreateWithoutAccountsInputObjectSchema } from './UserCreateWithoutAccountsInput.schema'
import { UserUncheckedCreateWithoutAccountsInputObjectSchema } from './UserUncheckedCreateWithoutAccountsInput.schema'
import { UserCreateOrConnectWithoutAccountsInputObjectSchema } from './UserCreateOrConnectWithoutAccountsInput.schema'
import { UserUpsertWithoutAccountsInputObjectSchema } from './UserUpsertWithoutAccountsInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserUpdateWithoutAccountsInputObjectSchema } from './UserUpdateWithoutAccountsInput.schema'
import { UserUncheckedUpdateWithoutAccountsInputObjectSchema } from './UserUncheckedUpdateWithoutAccountsInput.schema'

export const UserUpdateOneRequiredWithoutAccountsInputObjectSchema = z.union([
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
		upsert: UserUpsertWithoutAccountsInputObjectSchema?.optional(),
	}),
	z.object({
		connect: UserWhereUniqueInputObjectSchema?.optional(),
	}),
	z.object({
		update: z
			.union([
				UserUpdateWithoutAccountsInputObjectSchema,
				UserUncheckedUpdateWithoutAccountsInputObjectSchema,
			])
			?.optional(),
	}),
])
