import { z } from 'zod'
import { ContactEmailUpdateManyMutationInputObjectSchema } from './objects/ContactEmailUpdateManyMutationInput.schema'
import { ContactEmailWhereInputObjectSchema } from './objects/ContactEmailWhereInput.schema'

export const ContactEmailUpdateManySchema = z.object({
	data: ContactEmailUpdateManyMutationInputObjectSchema,
	where: ContactEmailWhereInputObjectSchema.optional(),
})
