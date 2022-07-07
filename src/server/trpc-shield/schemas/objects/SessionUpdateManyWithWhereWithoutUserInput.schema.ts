import { z } from 'zod'
import { SessionScalarWhereInputObjectSchema } from './SessionScalarWhereInput.schema'
import { SessionUpdateManyMutationInputObjectSchema } from './SessionUpdateManyMutationInput.schema'
import { SessionUncheckedUpdateManyWithoutSessionsInputObjectSchema } from './SessionUncheckedUpdateManyWithoutSessionsInput.schema'

export const SessionUpdateManyWithWhereWithoutUserInputObjectSchema = z.object({
	where: SessionScalarWhereInputObjectSchema,
	data: z.union([
		SessionUpdateManyMutationInputObjectSchema,
		SessionUncheckedUpdateManyWithoutSessionsInputObjectSchema,
	]),
})
