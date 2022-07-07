import { z } from 'zod'
import { ContactEmailUpdateInputObjectSchema } from './objects/ContactEmailUpdateInput.schema'
import { ContactEmailWhereUniqueInputObjectSchema } from './objects/ContactEmailWhereUniqueInput.schema'

export const ContactEmailUpdateOneSchema = z.object({
	data: ContactEmailUpdateInputObjectSchema,
	where: ContactEmailWhereUniqueInputObjectSchema,
})
