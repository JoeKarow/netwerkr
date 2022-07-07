import { z } from 'zod'
import { AccountScalarWhereInputObjectSchema } from './AccountScalarWhereInput.schema'
import { AccountUpdateManyMutationInputObjectSchema } from './AccountUpdateManyMutationInput.schema'
import { AccountUncheckedUpdateManyWithoutAccountsInputObjectSchema } from './AccountUncheckedUpdateManyWithoutAccountsInput.schema'

export const AccountUpdateManyWithWhereWithoutUserInputObjectSchema = z.object({
	where: AccountScalarWhereInputObjectSchema,
	data: z.union([
		AccountUpdateManyMutationInputObjectSchema,
		AccountUncheckedUpdateManyWithoutAccountsInputObjectSchema,
	]),
})
