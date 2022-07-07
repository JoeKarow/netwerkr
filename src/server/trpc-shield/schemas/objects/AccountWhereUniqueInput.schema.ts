import { z } from 'zod'
import { AccountProviderProviderAccountIdCompoundUniqueInputObjectSchema } from './AccountProviderProviderAccountIdCompoundUniqueInput.schema'

export const AccountWhereUniqueInputObjectSchema = z.object({
	id: z.string()?.optional(),
	provider_providerAccountId:
		AccountProviderProviderAccountIdCompoundUniqueInputObjectSchema?.optional(),
})
