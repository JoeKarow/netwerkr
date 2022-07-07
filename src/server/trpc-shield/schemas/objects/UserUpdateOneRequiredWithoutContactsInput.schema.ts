import { z } from 'zod'
import { UserCreateWithoutContactsInputObjectSchema } from './UserCreateWithoutContactsInput.schema'
import { UserUncheckedCreateWithoutContactsInputObjectSchema } from './UserUncheckedCreateWithoutContactsInput.schema'
import { UserCreateOrConnectWithoutContactsInputObjectSchema } from './UserCreateOrConnectWithoutContactsInput.schema'
import { UserUpsertWithoutContactsInputObjectSchema } from './UserUpsertWithoutContactsInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserUpdateWithoutContactsInputObjectSchema } from './UserUpdateWithoutContactsInput.schema'
import { UserUncheckedUpdateWithoutContactsInputObjectSchema } from './UserUncheckedUpdateWithoutContactsInput.schema'

export const UserUpdateOneRequiredWithoutContactsInputObjectSchema = z.union([
	z.object({
		create: z
			.union([
				UserCreateWithoutContactsInputObjectSchema,
				UserUncheckedCreateWithoutContactsInputObjectSchema,
			])
			?.optional(),
	}),
	z.object({
		connectOrCreate:
			UserCreateOrConnectWithoutContactsInputObjectSchema?.optional(),
	}),
	z.object({
		upsert: UserUpsertWithoutContactsInputObjectSchema?.optional(),
	}),
	z.object({
		connect: UserWhereUniqueInputObjectSchema?.optional(),
	}),
	z.object({
		update: z
			.union([
				UserUpdateWithoutContactsInputObjectSchema,
				UserUncheckedUpdateWithoutContactsInputObjectSchema,
			])
			?.optional(),
	}),
])
