import { z } from 'zod'
import { ContactEmailCreateInputObjectSchema } from './objects/ContactEmailCreateInput.schema'

export const ContactEmailCreateSchema = z.object({
	data: ContactEmailCreateInputObjectSchema,
})
