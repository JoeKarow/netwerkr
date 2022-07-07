import { z } from 'zod'
import { ContactPhoneCreateManyContactInputObjectSchema } from './ContactPhoneCreateManyContactInput.schema'

export const ContactPhoneCreateManyContactInputEnvelopeObjectSchema = z.object({
	data: z.array(ContactPhoneCreateManyContactInputObjectSchema),
})
