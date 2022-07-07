import { z } from 'zod'
import { ContactUpdateInputObjectSchema } from './objects/ContactUpdateInput.schema'
import { ContactWhereUniqueInputObjectSchema } from './objects/ContactWhereUniqueInput.schema'

export const ContactUpdateOneSchema = z.object({
	data: ContactUpdateInputObjectSchema,
	where: ContactWhereUniqueInputObjectSchema,
})
