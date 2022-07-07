import { z } from 'zod'
import { SessionCreateManyUserInputObjectSchema } from './SessionCreateManyUserInput.schema'

export const SessionCreateManyUserInputEnvelopeObjectSchema = z.object({
	data: z.array(SessionCreateManyUserInputObjectSchema),
})
