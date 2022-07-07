import { z } from 'zod'
import { UserCreateWithoutProfileInputObjectSchema } from './UserCreateWithoutProfileInput.schema'
import { UserUncheckedCreateWithoutProfileInputObjectSchema } from './UserUncheckedCreateWithoutProfileInput.schema'
import { UserCreateOrConnectWithoutProfileInputObjectSchema } from './UserCreateOrConnectWithoutProfileInput.schema'
import { UserUpsertWithoutProfileInputObjectSchema } from './UserUpsertWithoutProfileInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserUpdateWithoutProfileInputObjectSchema } from './UserUpdateWithoutProfileInput.schema'
import { UserUncheckedUpdateWithoutProfileInputObjectSchema } from './UserUncheckedUpdateWithoutProfileInput.schema'

export const UserUpdateOneWithoutProfileInputObjectSchema = z.union([
	z.object({
		create: z
			.union([
				UserCreateWithoutProfileInputObjectSchema,
				UserUncheckedCreateWithoutProfileInputObjectSchema,
			])
			?.optional(),
	}),
	z.object({
		connectOrCreate:
			UserCreateOrConnectWithoutProfileInputObjectSchema?.optional(),
	}),
	z.object({
		upsert: UserUpsertWithoutProfileInputObjectSchema?.optional(),
	}),
	z.object({
		disconnect: z.boolean()?.optional(),
	}),
	z.object({
		delete: z.boolean()?.optional(),
	}),
	z.object({
		connect: UserWhereUniqueInputObjectSchema?.optional(),
	}),
	z.object({
		update: z
			.union([
				UserUpdateWithoutProfileInputObjectSchema,
				UserUncheckedUpdateWithoutProfileInputObjectSchema,
			])
			?.optional(),
	}),
])
