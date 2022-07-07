import { z } from 'zod'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserCreateWithoutContactsInputObjectSchema } from './UserCreateWithoutContactsInput.schema'
import { UserUncheckedCreateWithoutContactsInputObjectSchema } from './UserUncheckedCreateWithoutContactsInput.schema'

export const UserCreateOrConnectWithoutContactsInputObjectSchema = z.object({
	where: UserWhereUniqueInputObjectSchema,
	create: z.union([
		UserCreateWithoutContactsInputObjectSchema,
		UserUncheckedCreateWithoutContactsInputObjectSchema,
	]),
})
