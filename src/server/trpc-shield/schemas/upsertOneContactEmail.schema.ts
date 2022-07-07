import { z } from 'zod'
import { ContactEmailWhereUniqueInputObjectSchema } from './objects/ContactEmailWhereUniqueInput.schema'
import { ContactEmailCreateInputObjectSchema } from './objects/ContactEmailCreateInput.schema'
import { ContactEmailUpdateInputObjectSchema } from './objects/ContactEmailUpdateInput.schema'

export const ContactEmailUpsertSchema = z.object({
	where: ContactEmailWhereUniqueInputObjectSchema,
	create: ContactEmailCreateInputObjectSchema,
	update: ContactEmailUpdateInputObjectSchema,
})
