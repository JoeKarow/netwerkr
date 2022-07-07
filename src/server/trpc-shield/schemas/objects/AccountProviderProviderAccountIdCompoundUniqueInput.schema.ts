import { z } from 'zod'

export const AccountProviderProviderAccountIdCompoundUniqueInputObjectSchema =
	z.object({
		provider: z.string(),
		providerAccountId: z.string(),
	})
