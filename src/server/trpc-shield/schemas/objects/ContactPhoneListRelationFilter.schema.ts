import { z } from 'zod'
import { ContactPhoneWhereInputObjectSchema } from './ContactPhoneWhereInput.schema'

///@ts-ignore
export const ContactPhoneListRelationFilterObjectSchema = z.object({
	every: ContactPhoneWhereInputObjectSchema?.optional(),
	some: ContactPhoneWhereInputObjectSchema?.optional(),
	none: ContactPhoneWhereInputObjectSchema?.optional(),
})
