import { z } from 'zod'
import { UserCreateWithoutContactsInputObjectSchema } from './UserCreateWithoutContactsInput.schema'
import { UserUncheckedCreateWithoutContactsInputObjectSchema } from './UserUncheckedCreateWithoutContactsInput.schema'
import { UserCreateOrConnectWithoutContactsInputObjectSchema } from './UserCreateOrConnectWithoutContactsInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutContactsInputObjectSchema = z.union([
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
		connect: UserWhereUniqueInputObjectSchema?.optional(),
	}),
])
