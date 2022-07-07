import { z } from 'zod'
import { SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema'
import { SessionUpdateWithoutUserInputObjectSchema } from './SessionUpdateWithoutUserInput.schema'
import { SessionUncheckedUpdateWithoutUserInputObjectSchema } from './SessionUncheckedUpdateWithoutUserInput.schema'
import { SessionCreateWithoutUserInputObjectSchema } from './SessionCreateWithoutUserInput.schema'
import { SessionUncheckedCreateWithoutUserInputObjectSchema } from './SessionUncheckedCreateWithoutUserInput.schema'

export const SessionUpsertWithWhereUniqueWithoutUserInputObjectSchema =
	z.object({
		where: SessionWhereUniqueInputObjectSchema,
		update: z.union([
			SessionUpdateWithoutUserInputObjectSchema,
			SessionUncheckedUpdateWithoutUserInputObjectSchema,
		]),
		create: z.union([
			SessionCreateWithoutUserInputObjectSchema,
			SessionUncheckedCreateWithoutUserInputObjectSchema,
		]),
	})
