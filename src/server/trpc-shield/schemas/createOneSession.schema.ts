import { z } from 'zod'
import { SessionCreateInputObjectSchema } from './objects/SessionCreateInput.schema'

export const SessionCreateSchema = z.object({
	data: SessionCreateInputObjectSchema,
})
