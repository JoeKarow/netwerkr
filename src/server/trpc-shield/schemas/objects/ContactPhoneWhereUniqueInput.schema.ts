import { z } from 'zod'

export const ContactPhoneWhereUniqueInputObjectSchema = z.object({
	id: z.string()?.optional(),
})
