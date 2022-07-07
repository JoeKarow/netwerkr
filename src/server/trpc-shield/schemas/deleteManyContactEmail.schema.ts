import { z } from 'zod'
import { ContactEmailWhereInputObjectSchema } from './objects/ContactEmailWhereInput.schema'

export const ContactEmailDeleteManySchema = z.object({
	where: ContactEmailWhereInputObjectSchema.optional(),
})
