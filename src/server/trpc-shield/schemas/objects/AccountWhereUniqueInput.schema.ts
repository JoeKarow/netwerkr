import { z } from 'zod'
import { AccountProviderProviderAccountIdCompoundUniqueInputObjectSchema } from './AccountProviderProviderAccountIdCompoundUniqueInput.schema'

export const AccountWhereUniqueInputObjectSchema = z.object({
	id: z.string(),
	provider_providerAccountId:
		AccountProviderProviderAccountIdCompoundUniqueInputObjectSchema?.optional(),
})
