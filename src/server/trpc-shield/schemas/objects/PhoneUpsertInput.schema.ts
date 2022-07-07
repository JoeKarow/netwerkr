import { z } from 'zod'
import { PhoneCreateInputObjectSchema } from './PhoneCreateInput.schema'
import { PhoneUpdateInputObjectSchema } from './PhoneUpdateInput.schema'

export const PhoneUpsertInputObjectSchema = z.object({
	set: PhoneCreateInputObjectSchema.nullable(),
	update: PhoneUpdateInputObjectSchema,
})
