import { z } from 'zod'
import { UserCreateWithoutSessionsInputObjectSchema } from './UserCreateWithoutSessionsInput.schema'
import { UserUncheckedCreateWithoutSessionsInputObjectSchema } from './UserUncheckedCreateWithoutSessionsInput.schema'
import { UserCreateOrConnectWithoutSessionsInputObjectSchema } from './UserCreateOrConnectWithoutSessionsInput.schema'
import { UserUpsertWithoutSessionsInputObjectSchema } from './UserUpsertWithoutSessionsInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserUpdateWithoutSessionsInputObjectSchema } from './UserUpdateWithoutSessionsInput.schema'
import { UserUncheckedUpdateWithoutSessionsInputObjectSchema } from './UserUncheckedUpdateWithoutSessionsInput.schema'

export const UserUpdateOneRequiredWithoutSessionsInputObjectSchema = z.union([
	z.object({
		create: z
			.union([
				UserCreateWithoutSessionsInputObjectSchema,
				UserUncheckedCreateWithoutSessionsInputObjectSchema,
			])
			?.optional(),
	}),
	z.object({
		connectOrCreate:
			UserCreateOrConnectWithoutSessionsInputObjectSchema?.optional(),
	}),
	z.object({
		upsert: UserUpsertWithoutSessionsInputObjectSchema?.optional(),
	}),
	z.object({
		connect: UserWhereUniqueInputObjectSchema?.optional(),
	}),
	z.object({
		update: z
			.union([
				UserUpdateWithoutSessionsInputObjectSchema,
				UserUncheckedUpdateWithoutSessionsInputObjectSchema,
			])
			?.optional(),
	}),
])
