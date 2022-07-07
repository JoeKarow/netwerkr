import { z } from 'zod'
import { AccountCreateWithoutUserInputObjectSchema } from './AccountCreateWithoutUserInput.schema'
import { AccountUncheckedCreateWithoutUserInputObjectSchema } from './AccountUncheckedCreateWithoutUserInput.schema'
import { AccountCreateOrConnectWithoutUserInputObjectSchema } from './AccountCreateOrConnectWithoutUserInput.schema'
import { AccountCreateManyUserInputEnvelopeObjectSchema } from './AccountCreateManyUserInputEnvelope.schema'
import { AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema'

export const AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema =
	z.union([
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
			createMany: AccountCreateManyUserInputEnvelopeObjectSchema?.optional(),
		}),
		z.object({
			connect: z
				.union([
					AccountWhereUniqueInputObjectSchema,
					z.array(AccountWhereUniqueInputObjectSchema),
				])
				?.optional(),
		}),
	])
