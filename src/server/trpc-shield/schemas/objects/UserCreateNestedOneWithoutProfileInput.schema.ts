import { z } from 'zod'
import { UserCreateWithoutProfileInputObjectSchema } from './UserCreateWithoutProfileInput.schema'
import { UserUncheckedCreateWithoutProfileInputObjectSchema } from './UserUncheckedCreateWithoutProfileInput.schema'
import { UserCreateOrConnectWithoutProfileInputObjectSchema } from './UserCreateOrConnectWithoutProfileInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutProfileInputObjectSchema = z.union([
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
		connect: UserWhereUniqueInputObjectSchema?.optional(),
	}),
])
