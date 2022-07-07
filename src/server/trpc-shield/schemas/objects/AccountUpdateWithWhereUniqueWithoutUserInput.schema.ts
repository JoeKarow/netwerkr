import { z } from 'zod'
import { AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema'
import { AccountUpdateWithoutUserInputObjectSchema } from './AccountUpdateWithoutUserInput.schema'
import { AccountUncheckedUpdateWithoutUserInputObjectSchema } from './AccountUncheckedUpdateWithoutUserInput.schema'

export const AccountUpdateWithWhereUniqueWithoutUserInputObjectSchema =
	z.object({
		where: AccountWhereUniqueInputObjectSchema,
		data: z.union([
			AccountUpdateWithoutUserInputObjectSchema,
			AccountUncheckedUpdateWithoutUserInputObjectSchema,
		]),
	})
