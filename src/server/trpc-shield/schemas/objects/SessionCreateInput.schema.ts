import { z } from 'zod'
import { UserUncheckedCreateWithoutSessionsInputObjectSchema } from './UserUncheckedCreateWithoutSessionsInput.schema'

const UserConnect = z.object({
	connect: UserUncheckedCreateWithoutSessionsInputObjectSchema.pick({
		id: true,
	}),
})

export const SessionCreateInputObjectSchema = z.object({
	id: z.string()?.optional(),
	sessionToken: z.string(),
	expires: z.date(),
	user: UserConnect,
})
