import { z } from 'zod'
import { UserCreateNestedOneWithoutSessionsInputObjectSchema } from './UserCreateNestedOneWithoutSessionsInput.schema'

export const SessionCreateInputObjectSchema = z.object({
	id: z.string()?.optional(),
	sessionToken: z.string(),
	expires: z.date(),
	user: UserCreateNestedOneWithoutSessionsInputObjectSchema,
})
