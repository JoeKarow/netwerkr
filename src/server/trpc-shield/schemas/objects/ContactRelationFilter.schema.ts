import { z } from 'zod'
import { ContactWhereInputObjectSchema } from './ContactWhereInput.schema'

///@ts-ignore
export const ContactRelationFilterObjectSchema = z.object({
	is: ContactWhereInputObjectSchema?.optional(),
	isNot: ContactWhereInputObjectSchema?.optional(),
})
