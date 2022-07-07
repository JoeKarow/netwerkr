import { z } from 'zod'
import { AccountWhereInputObjectSchema } from './AccountWhereInput.schema'

///@ts-ignore
export const AccountListRelationFilterObjectSchema = z.object({
	every: AccountWhereInputObjectSchema?.optional(),
	some: AccountWhereInputObjectSchema?.optional(),
	none: AccountWhereInputObjectSchema?.optional(),
})
