import { z } from 'zod'
import { SessionCreateWithoutUserInputObjectSchema } from './SessionCreateWithoutUserInput.schema'
import { SessionUncheckedCreateWithoutUserInputObjectSchema } from './SessionUncheckedCreateWithoutUserInput.schema'
import { SessionCreateOrConnectWithoutUserInputObjectSchema } from './SessionCreateOrConnectWithoutUserInput.schema'
import { SessionUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './SessionUpsertWithWhereUniqueWithoutUserInput.schema'
import { SessionCreateManyUserInputEnvelopeObjectSchema } from './SessionCreateManyUserInputEnvelope.schema'
import { SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema'
import { SessionUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './SessionUpdateWithWhereUniqueWithoutUserInput.schema'
import { SessionUpdateManyWithWhereWithoutUserInputObjectSchema } from './SessionUpdateManyWithWhereWithoutUserInput.schema'
import { SessionScalarWhereInputObjectSchema } from './SessionScalarWhereInput.schema'

export const SessionUncheckedUpdateManyWithoutUserInputObjectSchema = z.union([
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
		upsert: z
			.union([
				SessionUpsertWithWhereUniqueWithoutUserInputObjectSchema,
				z.array(SessionUpsertWithWhereUniqueWithoutUserInputObjectSchema),
			])
			?.optional(),
	}),
	z.object({
		createMany: SessionCreateManyUserInputEnvelopeObjectSchema?.optional(),
	}),
	z.object({
		set: z
			.union([
				SessionWhereUniqueInputObjectSchema,
				z.array(SessionWhereUniqueInputObjectSchema),
			])
			?.optional(),
	}),
	z.object({
		disconnect: z
			.union([
				SessionWhereUniqueInputObjectSchema,
				z.array(SessionWhereUniqueInputObjectSchema),
			])
			?.optional(),
	}),
	z.object({
		delete: z
			.union([
				SessionWhereUniqueInputObjectSchema,
				z.array(SessionWhereUniqueInputObjectSchema),
			])
			?.optional(),
	}),
	z.object({
		connect: z
			.union([
				SessionWhereUniqueInputObjectSchema,
				z.array(SessionWhereUniqueInputObjectSchema),
			])
			?.optional(),
	}),
	z.object({
		update: z
			.union([
				SessionUpdateWithWhereUniqueWithoutUserInputObjectSchema,
				z.array(SessionUpdateWithWhereUniqueWithoutUserInputObjectSchema),
			])
			?.optional(),
	}),
	z.object({
		updateMany: z
			.union([
				SessionUpdateManyWithWhereWithoutUserInputObjectSchema,
				z.array(SessionUpdateManyWithWhereWithoutUserInputObjectSchema),
			])
			?.optional(),
	}),
	z.object({
		deleteMany: z
			.union([
				SessionScalarWhereInputObjectSchema,
				z.array(SessionScalarWhereInputObjectSchema),
			])
			?.optional(),
	}),
])
