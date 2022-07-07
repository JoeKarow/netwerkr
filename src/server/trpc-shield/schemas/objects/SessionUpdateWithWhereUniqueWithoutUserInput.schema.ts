import { z } from 'zod'
import { SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema'
import { SessionUpdateWithoutUserInputObjectSchema } from './SessionUpdateWithoutUserInput.schema'
import { SessionUncheckedUpdateWithoutUserInputObjectSchema } from './SessionUncheckedUpdateWithoutUserInput.schema'

export const SessionUpdateWithWhereUniqueWithoutUserInputObjectSchema =
	z.object({
		where: SessionWhereUniqueInputObjectSchema,
		data: z.union([
			SessionUpdateWithoutUserInputObjectSchema,
			SessionUncheckedUpdateWithoutUserInputObjectSchema,
		]),
	})
