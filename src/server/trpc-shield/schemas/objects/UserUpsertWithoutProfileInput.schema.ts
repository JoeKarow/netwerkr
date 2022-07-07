import { z } from 'zod'
import { UserUpdateWithoutProfileInputObjectSchema } from './UserUpdateWithoutProfileInput.schema'
import { UserUncheckedUpdateWithoutProfileInputObjectSchema } from './UserUncheckedUpdateWithoutProfileInput.schema'
import { UserCreateWithoutProfileInputObjectSchema } from './UserCreateWithoutProfileInput.schema'
import { UserUncheckedCreateWithoutProfileInputObjectSchema } from './UserUncheckedCreateWithoutProfileInput.schema'

export const UserUpsertWithoutProfileInputObjectSchema = z.object({
	update: z.union([
		UserUpdateWithoutProfileInputObjectSchema,
		UserUncheckedUpdateWithoutProfileInputObjectSchema,
	]),
	create: z.union([
		UserCreateWithoutProfileInputObjectSchema,
		UserUncheckedCreateWithoutProfileInputObjectSchema,
	]),
})
