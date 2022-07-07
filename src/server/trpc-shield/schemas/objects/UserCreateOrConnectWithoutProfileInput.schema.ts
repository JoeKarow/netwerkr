import { z } from 'zod'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserCreateWithoutProfileInputObjectSchema } from './UserCreateWithoutProfileInput.schema'
import { UserUncheckedCreateWithoutProfileInputObjectSchema } from './UserUncheckedCreateWithoutProfileInput.schema'

export const UserCreateOrConnectWithoutProfileInputObjectSchema = z.object({
	where: UserWhereUniqueInputObjectSchema,
	create: z.union([
		UserCreateWithoutProfileInputObjectSchema,
		UserUncheckedCreateWithoutProfileInputObjectSchema,
	]),
})
