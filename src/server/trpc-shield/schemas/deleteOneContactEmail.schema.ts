import { z } from 'zod'
import { ContactEmailWhereUniqueInputObjectSchema } from './objects/ContactEmailWhereUniqueInput.schema'

export const ContactEmailDeleteOneSchema = z.object({
	where: ContactEmailWhereUniqueInputObjectSchema,
})
