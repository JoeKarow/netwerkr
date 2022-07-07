import { z } from 'zod'
import { UserUpdateWithoutSessionsInputObjectSchema } from './UserUpdateWithoutSessionsInput.schema'
import { UserUncheckedUpdateWithoutSessionsInputObjectSchema } from './UserUncheckedUpdateWithoutSessionsInput.schema'
import { UserCreateWithoutSessionsInputObjectSchema } from './UserCreateWithoutSessionsInput.schema'
import { UserUncheckedCreateWithoutSessionsInputObjectSchema } from './UserUncheckedCreateWithoutSessionsInput.schema'

export const UserUpsertWithoutSessionsInputObjectSchema = z.object({
	update: z.union([
		UserUpdateWithoutSessionsInputObjectSchema,
		UserUncheckedUpdateWithoutSessionsInputObjectSchema,
	]),
	create: z.union([
		UserCreateWithoutSessionsInputObjectSchema,
		UserUncheckedCreateWithoutSessionsInputObjectSchema,
	]),
})
