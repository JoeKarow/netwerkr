import { z } from 'zod'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserCreateWithoutSessionsInputObjectSchema } from './UserCreateWithoutSessionsInput.schema'
import { UserUncheckedCreateWithoutSessionsInputObjectSchema } from './UserUncheckedCreateWithoutSessionsInput.schema'

export const UserCreateOrConnectWithoutSessionsInputObjectSchema = z.object({
	where: UserWhereUniqueInputObjectSchema,
	create: z.union([
		UserCreateWithoutSessionsInputObjectSchema,
		UserUncheckedCreateWithoutSessionsInputObjectSchema,
	]),
})
