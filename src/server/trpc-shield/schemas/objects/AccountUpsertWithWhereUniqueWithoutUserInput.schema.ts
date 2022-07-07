import { z } from 'zod'
import { AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema'
import { AccountUpdateWithoutUserInputObjectSchema } from './AccountUpdateWithoutUserInput.schema'
import { AccountUncheckedUpdateWithoutUserInputObjectSchema } from './AccountUncheckedUpdateWithoutUserInput.schema'
import { AccountCreateWithoutUserInputObjectSchema } from './AccountCreateWithoutUserInput.schema'
import { AccountUncheckedCreateWithoutUserInputObjectSchema } from './AccountUncheckedCreateWithoutUserInput.schema'

export const AccountUpsertWithWhereUniqueWithoutUserInputObjectSchema =
	z.object({
		where: AccountWhereUniqueInputObjectSchema,
		update: z.union([
			AccountUpdateWithoutUserInputObjectSchema,
			AccountUncheckedUpdateWithoutUserInputObjectSchema,
		]),
		create: z.union([
			AccountCreateWithoutUserInputObjectSchema,
			AccountUncheckedCreateWithoutUserInputObjectSchema,
		]),
	})
