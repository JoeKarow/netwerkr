import { z } from 'zod'
import { AccountCreateManyUserInputObjectSchema } from './AccountCreateManyUserInput.schema'

export const AccountCreateManyUserInputEnvelopeObjectSchema = z.object({
	data: z.array(AccountCreateManyUserInputObjectSchema),
})
