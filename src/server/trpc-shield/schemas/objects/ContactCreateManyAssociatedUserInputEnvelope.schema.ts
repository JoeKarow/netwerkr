import { z } from 'zod'
import { ContactCreateManyAssociatedUserInputObjectSchema } from './ContactCreateManyAssociatedUserInput.schema'

export const ContactCreateManyAssociatedUserInputEnvelopeObjectSchema =
	z.object({
		data: z.array(ContactCreateManyAssociatedUserInputObjectSchema),
	})
