import { z } from 'zod'
import { ContactEmailCreateManyContactInputObjectSchema } from './ContactEmailCreateManyContactInput.schema'

export const ContactEmailCreateManyContactInputEnvelopeObjectSchema = z.object({
	data: z.array(ContactEmailCreateManyContactInputObjectSchema),
})
