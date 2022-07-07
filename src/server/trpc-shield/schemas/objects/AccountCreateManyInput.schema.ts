import { z } from 'zod'

export const AccountCreateManyInputObjectSchema = z.object({
	id: z.string()?.optional(),
	userId: z.string(),
	type: z.string(),
	provider: z.string(),
	providerAccountId: z.string(),
	refresh_token: z.string()?.optional().nullable(),
	access_token: z.string()?.optional().nullable(),
	expires_at: z.number()?.optional().nullable(),
	token_type: z.string()?.optional().nullable(),
	scope: z.string()?.optional().nullable(),
	id_token: z.string()?.optional().nullable(),
	session_state: z.string()?.optional().nullable(),
	createdAt: z.date()?.optional().nullable(),
	updatedAt: z.date()?.optional().nullable(),
})
