import { z } from 'zod'
import { ContactWhereInputObjectSchema } from './ContactWhereInput.schema'

///@ts-ignore
export const ContactListRelationFilterObjectSchema = z.object({
	every: ContactWhereInputObjectSchema?.optional(),
	some: ContactWhereInputObjectSchema?.optional(),
	none: ContactWhereInputObjectSchema?.optional(),
})
