import { z } from 'zod'
import { ContactEmailEmailContactIdCompoundUniqueInputObjectSchema } from './ContactEmailEmailContactIdCompoundUniqueInput.schema'

export const ContactEmailWhereUniqueInputObjectSchema = z.object({
	id: z.string()?.optional(),
	email_contactId:
		ContactEmailEmailContactIdCompoundUniqueInputObjectSchema?.optional(),
})
