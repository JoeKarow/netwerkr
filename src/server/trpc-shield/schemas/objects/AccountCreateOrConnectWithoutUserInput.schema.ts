import { z } from 'zod'
import { AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema'
import { AccountCreateWithoutUserInputObjectSchema } from './AccountCreateWithoutUserInput.schema'
import { AccountUncheckedCreateWithoutUserInputObjectSchema } from './AccountUncheckedCreateWithoutUserInput.schema'

export const AccountCreateOrConnectWithoutUserInputObjectSchema = z.object({
	where: AccountWhereUniqueInputObjectSchema,
	create: z.union([
		AccountCreateWithoutUserInputObjectSchema,
		AccountUncheckedCreateWithoutUserInputObjectSchema,
	]),
})
