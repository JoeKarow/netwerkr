import { z } from 'zod'
import { InteractionsCreateWithoutContactInputObjectSchema } from './InteractionsCreateWithoutContactInput.schema'
import { InteractionsUncheckedCreateWithoutContactInputObjectSchema } from './InteractionsUncheckedCreateWithoutContactInput.schema'
import { InteractionsCreateOrConnectWithoutContactInputObjectSchema } from './InteractionsCreateOrConnectWithoutContactInput.schema'
import { InteractionsUpsertWithWhereUniqueWithoutContactInputObjectSchema } from './InteractionsUpsertWithWhereUniqueWithoutContactInput.schema'
import { InteractionsCreateManyContactInputEnvelopeObjectSchema } from './InteractionsCreateManyContactInputEnvelope.schema'
import { InteractionsWhereUniqueInputObjectSchema } from './InteractionsWhereUniqueInput.schema'
import { InteractionsUpdateWithWhereUniqueWithoutContactInputObjectSchema } from './InteractionsUpdateWithWhereUniqueWithoutContactInput.schema'
import { InteractionsUpdateManyWithWhereWithoutContactInputObjectSchema } from './InteractionsUpdateManyWithWhereWithoutContactInput.schema'
import { InteractionsScalarWhereInputObjectSchema } from './InteractionsScalarWhereInput.schema'

export const InteractionsUpdateManyWithoutContactInputObjectSchema = z.union([
	z.object({
		create: z
			.union([
				InteractionsCreateWithoutContactInputObjectSchema,
				z.array(InteractionsCreateWithoutContactInputObjectSchema),
				InteractionsUncheckedCreateWithoutContactInputObjectSchema,
				z.array(InteractionsUncheckedCreateWithoutContactInputObjectSchema),
			])
			?.optional(),
	}),
	z.object({
		connectOrCreate: z
			.union([
				InteractionsCreateOrConnectWithoutContactInputObjectSchema,
				z.array(InteractionsCreateOrConnectWithoutContactInputObjectSchema),
			])
			?.optional(),
	}),
	z.object({
		upsert: z
			.union([
				InteractionsUpsertWithWhereUniqueWithoutContactInputObjectSchema,
				z.array(
					InteractionsUpsertWithWhereUniqueWithoutContactInputObjectSchema
				),
			])
			?.optional(),
	}),
	z.object({
		createMany:
			InteractionsCreateManyContactInputEnvelopeObjectSchema?.optional(),
	}),
	z.object({
		set: z
			.union([
				InteractionsWhereUniqueInputObjectSchema,
				z.array(InteractionsWhereUniqueInputObjectSchema),
			])
			?.optional(),
	}),
	z.object({
		disconnect: z
			.union([
				InteractionsWhereUniqueInputObjectSchema,
				z.array(InteractionsWhereUniqueInputObjectSchema),
			])
			?.optional(),
	}),
	z.object({
		delete: z
			.union([
				InteractionsWhereUniqueInputObjectSchema,
				z.array(InteractionsWhereUniqueInputObjectSchema),
			])
			?.optional(),
	}),
	z.object({
		connect: z
			.union([
				InteractionsWhereUniqueInputObjectSchema,
				z.array(InteractionsWhereUniqueInputObjectSchema),
			])
			?.optional(),
	}),
	z.object({
		update: z
			.union([
				InteractionsUpdateWithWhereUniqueWithoutContactInputObjectSchema,
				z.array(
					InteractionsUpdateWithWhereUniqueWithoutContactInputObjectSchema
				),
			])
			?.optional(),
	}),
	z.object({
		updateMany: z
			.union([
				InteractionsUpdateManyWithWhereWithoutContactInputObjectSchema,
				z.array(InteractionsUpdateManyWithWhereWithoutContactInputObjectSchema),
			])
			?.optional(),
	}),
	z.object({
		deleteMany: z
			.union([
				InteractionsScalarWhereInputObjectSchema,
				z.array(InteractionsScalarWhereInputObjectSchema),
			])
			?.optional(),
	}),
])
