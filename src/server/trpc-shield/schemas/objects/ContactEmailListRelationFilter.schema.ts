import { z } from 'zod'
import { ContactEmailWhereInputObjectSchema } from './ContactEmailWhereInput.schema'

///@ts-ignore
export const ContactEmailListRelationFilterObjectSchema = z.object({
	every: ContactEmailWhereInputObjectSchema?.optional(),
	some: ContactEmailWhereInputObjectSchema?.optional(),
	none: ContactEmailWhereInputObjectSchema?.optional(),
})
