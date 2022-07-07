import { z } from 'zod'
import { EmailCreateInputObjectSchema } from './EmailCreateInput.schema'
import { EmailUpdateInputObjectSchema } from './EmailUpdateInput.schema'

export const EmailUpsertInputObjectSchema = z.object({
	set: EmailCreateInputObjectSchema.nullable(),
	update: EmailUpdateInputObjectSchema,
})
