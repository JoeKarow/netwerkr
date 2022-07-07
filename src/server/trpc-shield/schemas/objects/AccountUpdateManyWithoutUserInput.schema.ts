import { z } from 'zod'
import { AccountCreateWithoutUserInputObjectSchema } from './AccountCreateWithoutUserInput.schema'
import { AccountUncheckedCreateWithoutUserInputObjectSchema } from './AccountUncheckedCreateWithoutUserInput.schema'
import { AccountCreateOrConnectWithoutUserInputObjectSchema } from './AccountCreateOrConnectWithoutUserInput.schema'
import { AccountUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './AccountUpsertWithWhereUniqueWithoutUserInput.schema'
import { AccountCreateManyUserInputEnvelopeObjectSchema } from './AccountCreateManyUserInputEnvelope.schema'
import { AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema'
import { AccountUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './AccountUpdateWithWhereUniqueWithoutUserInput.schema'
import { AccountUpdateManyWithWhereWithoutUserInputObjectSchema } from './AccountUpdateManyWithWhereWithoutUserInput.schema'
import { AccountScalarWhereInputObjectSchema } from './AccountScalarWhereInput.schema'

export const AccountUpdateManyWithoutUserInputObjectSchema = z.union([
	z.object({
		create: z
			.union([
				AccountCreateWithoutUserInputObjectSchema,
				z.array(AccountCreateWithoutUserInputObjectSchema),
				AccountUncheckedCreateWithoutUserInputObjectSchema,
				z.array(AccountUncheckedCreateWithoutUserInputObjectSchema),
			])
			?.optional(),
	}),
	z.object({
		connectOrCreate: z
			.union([
				AccountCreateOrConnectWithoutUserInputObjectSchema,
				z.array(AccountCreateOrConnectWithoutUserInputObjectSchema),
			])
			?.optional(),
	}),
	z.object({
		upsert: z
			.union([
				AccountUpsertWithWhereUniqueWithoutUserInputObjectSchema,
				z.array(AccountUpsertWithWhereUniqueWithoutUserInputObjectSchema),
			])
			?.optional(),
	}),
	z.object({
		createMany: AccountCreateManyUserInputEnvelopeObjectSchema?.optional(),
	}),
	z.object({
		set: z
			.union([
				AccountWhereUniqueInputObjectSchema,
				z.array(AccountWhereUniqueInputObjectSchema),
			])
			?.optional(),
	}),
	z.object({
		disconnect: z
			.union([
				AccountWhereUniqueInputObjectSchema,
				z.array(AccountWhereUniqueInputObjectSchema),
			])
			?.optional(),
	}),
	z.object({
		delete: z
			.union([
				AccountWhereUniqueInputObjectSchema,
				z.array(AccountWhereUniqueInputObjectSchema),
			])
			?.optional(),
	}),
	z.object({
		connect: z
			.union([
				AccountWhereUniqueInputObjectSchema,
				z.array(AccountWhereUniqueInputObjectSchema),
			])
			?.optional(),
	}),
	z.object({
		update: z
			.union([
				AccountUpdateWithWhereUniqueWithoutUserInputObjectSchema,
				z.array(AccountUpdateWithWhereUniqueWithoutUserInputObjectSchema),
			])
			?.optional(),
	}),
	z.object({
		updateMany: z
			.union([
				AccountUpdateManyWithWhereWithoutUserInputObjectSchema,
				z.array(AccountUpdateManyWithWhereWithoutUserInputObjectSchema),
			])
			?.optional(),
	}),
	z.object({
		deleteMany: z
			.union([
				AccountScalarWhereInputObjectSchema,
				z.array(AccountScalarWhereInputObjectSchema),
			])
			?.optional(),
	}),
])
