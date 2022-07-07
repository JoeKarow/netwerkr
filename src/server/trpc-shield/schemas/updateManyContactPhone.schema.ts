import { z } from 'zod'
import { ContactPhoneUpdateManyMutationInputObjectSchema } from './objects/ContactPhoneUpdateManyMutationInput.schema'
import { ContactPhoneWhereInputObjectSchema } from './objects/ContactPhoneWhereInput.schema'

export const ContactPhoneUpdateManySchema = z.object({
	data: ContactPhoneUpdateManyMutationInputObjectSchema,
	where: ContactPhoneWhereInputObjectSchema.optional(),
})
