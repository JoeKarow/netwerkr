import { z } from 'zod'
import { ContactWhereUniqueInputObjectSchema } from './objects/ContactWhereUniqueInput.schema'
import { ContactCreateInputObjectSchema } from './objects/ContactCreateInput.schema'
import { ContactUpdateInputObjectSchema } from './objects/ContactUpdateInput.schema'

export const ContactUpsertSchema = z.object({
	where: ContactWhereUniqueInputObjectSchema,
	create: ContactCreateInputObjectSchema,
	update: ContactUpdateInputObjectSchema,
})
