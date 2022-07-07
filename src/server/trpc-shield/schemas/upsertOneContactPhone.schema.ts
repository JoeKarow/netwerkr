import { z } from 'zod'
import { ContactPhoneWhereUniqueInputObjectSchema } from './objects/ContactPhoneWhereUniqueInput.schema'
import { ContactPhoneCreateInputObjectSchema } from './objects/ContactPhoneCreateInput.schema'
import { ContactPhoneUpdateInputObjectSchema } from './objects/ContactPhoneUpdateInput.schema'

export const ContactPhoneUpsertSchema = z.object({
	where: ContactPhoneWhereUniqueInputObjectSchema,
	create: ContactPhoneCreateInputObjectSchema,
	update: ContactPhoneUpdateInputObjectSchema,
})
