import { z } from 'zod'

export const ContactCreateManyAssociatedUserInputObjectSchema = z.object({
	id: z.string()?.optional(),
	firstName: z.string()?.optional().nullable(),
	lastName: z.string()?.optional().nullable(),
	photo: z.string(),
	onTwitterList: z.boolean(),
	createdAt: z.date()?.optional().nullable(),
	updatedAt: z.date()?.optional().nullable(),
})
