import { z } from 'zod'
import { ContactCreateInputObjectSchema } from './objects/ContactCreateInput.schema'

export const ContactCreateSchema = z.object({
	data: ContactCreateInputObjectSchema,
})
