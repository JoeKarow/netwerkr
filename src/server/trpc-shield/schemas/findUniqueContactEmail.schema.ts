import { z } from 'zod'
import { ContactEmailWhereUniqueInputObjectSchema } from './objects/ContactEmailWhereUniqueInput.schema'

export const ContactEmailFindUniqueSchema = z.object({
	where: ContactEmailWhereUniqueInputObjectSchema,
})
