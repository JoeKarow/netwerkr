import { z } from 'zod'
import { ContactPhoneWhereUniqueInputObjectSchema } from './objects/ContactPhoneWhereUniqueInput.schema'

export const ContactPhoneFindUniqueSchema = z.object({
	where: ContactPhoneWhereUniqueInputObjectSchema,
})
