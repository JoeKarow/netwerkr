import { z } from 'zod'
import { UserUpdateWithoutContactsInputObjectSchema } from './UserUpdateWithoutContactsInput.schema'
import { UserUncheckedUpdateWithoutContactsInputObjectSchema } from './UserUncheckedUpdateWithoutContactsInput.schema'
import { UserCreateWithoutContactsInputObjectSchema } from './UserCreateWithoutContactsInput.schema'
import { UserUncheckedCreateWithoutContactsInputObjectSchema } from './UserUncheckedCreateWithoutContactsInput.schema'

export const UserUpsertWithoutContactsInputObjectSchema = z.object({
	update: z.union([
		UserUpdateWithoutContactsInputObjectSchema,
		UserUncheckedUpdateWithoutContactsInputObjectSchema,
	]),
	create: z.union([
		UserCreateWithoutContactsInputObjectSchema,
		UserUncheckedCreateWithoutContactsInputObjectSchema,
	]),
})
