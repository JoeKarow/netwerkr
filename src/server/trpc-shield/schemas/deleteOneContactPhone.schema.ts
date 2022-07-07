import { z } from 'zod'
import { ContactPhoneWhereUniqueInputObjectSchema } from './objects/ContactPhoneWhereUniqueInput.schema'

export const ContactPhoneDeleteOneSchema = z.object({
	where: ContactPhoneWhereUniqueInputObjectSchema,
})
