import { z } from 'zod'
import { AccountCreateInputObjectSchema } from './objects/AccountCreateInput.schema'

export const AccountCreateSchema = z.object({
	data: AccountCreateInputObjectSchema,
})
