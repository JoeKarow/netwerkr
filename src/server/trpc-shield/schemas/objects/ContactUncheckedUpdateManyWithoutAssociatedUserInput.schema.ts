import { z } from 'zod'
import { ContactCreateWithoutAssociatedUserInputObjectSchema } from './ContactCreateWithoutAssociatedUserInput.schema'
import { ContactUncheckedCreateWithoutAssociatedUserInputObjectSchema } from './ContactUncheckedCreateWithoutAssociatedUserInput.schema'
import { ContactCreateOrConnectWithoutAssociatedUserInputObjectSchema } from './ContactCreateOrConnectWithoutAssociatedUserInput.schema'
import { ContactUpsertWithWhereUniqueWithoutAssociatedUserInputObjectSchema } from './ContactUpsertWithWhereUniqueWithoutAssociatedUserInput.schema'
import { ContactCreateManyAssociatedUserInputEnvelopeObjectSchema } from './ContactCreateManyAssociatedUserInputEnvelope.schema'
import { ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema'
import { ContactUpdateWithWhereUniqueWithoutAssociatedUserInputObjectSchema } from './ContactUpdateWithWhereUniqueWithoutAssociatedUserInput.schema'
import { ContactUpdateManyWithWhereWithoutAssociatedUserInputObjectSchema } from './ContactUpdateManyWithWhereWithoutAssociatedUserInput.schema'
import { ContactScalarWhereInputObjectSchema } from './ContactScalarWhereInput.schema'

export const ContactUncheckedUpdateManyWithoutAssociatedUserInputObjectSchema =
	z.union([
		z.object({
			create: z
				.union([
					ContactCreateWithoutAssociatedUserInputObjectSchema,
					z.array(ContactCreateWithoutAssociatedUserInputObjectSchema),
					ContactUncheckedCreateWithoutAssociatedUserInputObjectSchema,
					z.array(ContactUncheckedCreateWithoutAssociatedUserInputObjectSchema),
				])
				?.optional(),
		}),
		z.object({
			connectOrCreate: z
				.union([
					ContactCreateOrConnectWithoutAssociatedUserInputObjectSchema,
					z.array(ContactCreateOrConnectWithoutAssociatedUserInputObjectSchema),
				])
				?.optional(),
		}),
		z.object({
			upsert: z
				.union([
					ContactUpsertWithWhereUniqueWithoutAssociatedUserInputObjectSchema,
					z.array(
						ContactUpsertWithWhereUniqueWithoutAssociatedUserInputObjectSchema
					),
				])
				?.optional(),
		}),
		z.object({
			createMany:
				ContactCreateManyAssociatedUserInputEnvelopeObjectSchema?.optional(),
		}),
		z.object({
			set: z
				.union([
					ContactWhereUniqueInputObjectSchema,
					z.array(ContactWhereUniqueInputObjectSchema),
				])
				?.optional(),
		}),
		z.object({
			disconnect: z
				.union([
					ContactWhereUniqueInputObjectSchema,
					z.array(ContactWhereUniqueInputObjectSchema),
				])
				?.optional(),
		}),
		z.object({
			delete: z
				.union([
					ContactWhereUniqueInputObjectSchema,
					z.array(ContactWhereUniqueInputObjectSchema),
				])
				?.optional(),
		}),
		z.object({
			connect: z
				.union([
					ContactWhereUniqueInputObjectSchema,
					z.array(ContactWhereUniqueInputObjectSchema),
				])
				?.optional(),
		}),
		z.object({
			update: z
				.union([
					ContactUpdateWithWhereUniqueWithoutAssociatedUserInputObjectSchema,
					z.array(
						ContactUpdateWithWhereUniqueWithoutAssociatedUserInputObjectSchema
					),
				])
				?.optional(),
		}),
		z.object({
			updateMany: z
				.union([
					ContactUpdateManyWithWhereWithoutAssociatedUserInputObjectSchema,
					z.array(
						ContactUpdateManyWithWhereWithoutAssociatedUserInputObjectSchema
					),
				])
				?.optional(),
		}),
		z.object({
			deleteMany: z
				.union([
					ContactScalarWhereInputObjectSchema,
					z.array(ContactScalarWhereInputObjectSchema),
				])
				?.optional(),
		}),
	])
