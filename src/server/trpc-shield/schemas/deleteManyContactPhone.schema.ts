import { z } from 'zod'
import { ContactPhoneWhereInputObjectSchema } from './objects/ContactPhoneWhereInput.schema'

export const ContactPhoneDeleteManySchema = z.object({
	where: ContactPhoneWhereInputObjectSchema.optional(),
})
