import { z } from 'zod'
import { ContactPhoneUpdateInputObjectSchema } from './objects/ContactPhoneUpdateInput.schema'
import { ContactPhoneWhereUniqueInputObjectSchema } from './objects/ContactPhoneWhereUniqueInput.schema'

export const ContactPhoneUpdateOneSchema = z.object({
	data: ContactPhoneUpdateInputObjectSchema,
	where: ContactPhoneWhereUniqueInputObjectSchema,
})
