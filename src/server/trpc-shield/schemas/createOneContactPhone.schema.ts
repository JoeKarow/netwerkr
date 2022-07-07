import { z } from 'zod'
import { ContactPhoneCreateInputObjectSchema } from './objects/ContactPhoneCreateInput.schema'

export const ContactPhoneCreateSchema = z.object({
	data: ContactPhoneCreateInputObjectSchema,
})
