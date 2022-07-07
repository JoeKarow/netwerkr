import { z } from 'zod'
import { SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema'
import { SessionCreateWithoutUserInputObjectSchema } from './SessionCreateWithoutUserInput.schema'
import { SessionUncheckedCreateWithoutUserInputObjectSchema } from './SessionUncheckedCreateWithoutUserInput.schema'

export const SessionCreateOrConnectWithoutUserInputObjectSchema = z.object({
	where: SessionWhereUniqueInputObjectSchema,
	create: z.union([
		SessionCreateWithoutUserInputObjectSchema,
		SessionUncheckedCreateWithoutUserInputObjectSchema,
	]),
})
