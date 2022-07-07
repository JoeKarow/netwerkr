import { z } from 'zod'

export const ContactEmailEmailContactIdCompoundUniqueInputObjectSchema =
	z.object({
		email: z.string(),
		contactId: z.string(),
	})
