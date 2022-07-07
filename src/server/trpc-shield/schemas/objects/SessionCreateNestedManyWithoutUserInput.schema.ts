import { z } from 'zod'
import { SessionCreateWithoutUserInputObjectSchema } from './SessionCreateWithoutUserInput.schema'
import { SessionUncheckedCreateWithoutUserInputObjectSchema } from './SessionUncheckedCreateWithoutUserInput.schema'
import { SessionCreateOrConnectWithoutUserInputObjectSchema } from './SessionCreateOrConnectWithoutUserInput.schema'
import { SessionCreateManyUserInputEnvelopeObjectSchema } from './SessionCreateManyUserInputEnvelope.schema'
import { SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema'

export const SessionCreateNestedManyWithoutUserInputObjectSchema = z.union([
	z.object({
		create: z
			.union([
				SessionCreateWithoutUserInputObjectSchema,
				z.array(SessionCreateWithoutUserInputObjectSchema),
				SessionUncheckedCreateWithoutUserInputObjectSchema,
				z.array(SessionUncheckedCreateWithoutUserInputObjectSchema),
			])
			?.optional(),
	}),
	z.object({
		connectOrCreate: z
			.union([
				SessionCreateOrConnectWithoutUserInputObjectSchema,
				z.array(SessionCreateOrConnectWithoutUserInputObjectSchema),
			])
			?.optional(),
	}),
	z.object({
		createMany: SessionCreateManyUserInputEnvelopeObjectSchema?.optional(),
	}),
	z.object({
		connect: z
			.union([
				SessionWhereUniqueInputObjectSchema,
				z.array(SessionWhereUniqueInputObjectSchema),
			])
			?.optional(),
	}),
])
