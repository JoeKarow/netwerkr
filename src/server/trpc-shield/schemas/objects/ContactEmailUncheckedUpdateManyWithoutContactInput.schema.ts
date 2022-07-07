import { z } from 'zod'
import { ContactEmailCreateWithoutContactInputObjectSchema } from './ContactEmailCreateWithoutContactInput.schema'
import { ContactEmailUncheckedCreateWithoutContactInputObjectSchema } from './ContactEmailUncheckedCreateWithoutContactInput.schema'
import { ContactEmailCreateOrConnectWithoutContactInputObjectSchema } from './ContactEmailCreateOrConnectWithoutContactInput.schema'
import { ContactEmailUpsertWithWhereUniqueWithoutContactInputObjectSchema } from './ContactEmailUpsertWithWhereUniqueWithoutContactInput.schema'
import { ContactEmailCreateManyContactInputEnvelopeObjectSchema } from './ContactEmailCreateManyContactInputEnvelope.schema'
import { ContactEmailWhereUniqueInputObjectSchema } from './ContactEmailWhereUniqueInput.schema'
import { ContactEmailUpdateWithWhereUniqueWithoutContactInputObjectSchema } from './ContactEmailUpdateWithWhereUniqueWithoutContactInput.schema'
import { ContactEmailUpdateManyWithWhereWithoutContactInputObjectSchema } from './ContactEmailUpdateManyWithWhereWithoutContactInput.schema'
import { ContactEmailScalarWhereInputObjectSchema } from './ContactEmailScalarWhereInput.schema'

export const ContactEmailUncheckedUpdateManyWithoutContactInputObjectSchema =
	z.union([
		z.object({
			create: z
				.union([
					ContactEmailCreateWithoutContactInputObjectSchema,
					z.array(ContactEmailCreateWithoutContactInputObjectSchema),
					ContactEmailUncheckedCreateWithoutContactInputObjectSchema,
					z.array(ContactEmailUncheckedCreateWithoutContactInputObjectSchema),
				])
				?.optional(),
		}),
		z.object({
			connectOrCreate: z
				.union([
					ContactEmailCreateOrConnectWithoutContactInputObjectSchema,
					z.array(ContactEmailCreateOrConnectWithoutContactInputObjectSchema),
				])
				?.optional(),
		}),
		z.object({
			upsert: z
				.union([
					ContactEmailUpsertWithWhereUniqueWithoutContactInputObjectSchema,
					z.array(
						ContactEmailUpsertWithWhereUniqueWithoutContactInputObjectSchema
					),
				])
				?.optional(),
		}),
		z.object({
			createMany:
				ContactEmailCreateManyContactInputEnvelopeObjectSchema?.optional(),
		}),
		z.object({
			set: z
				.union([
					ContactEmailWhereUniqueInputObjectSchema,
					z.array(ContactEmailWhereUniqueInputObjectSchema),
				])
				?.optional(),
		}),
		z.object({
			disconnect: z
				.union([
					ContactEmailWhereUniqueInputObjectSchema,
					z.array(ContactEmailWhereUniqueInputObjectSchema),
				])
				?.optional(),
		}),
		z.object({
			delete: z
				.union([
					ContactEmailWhereUniqueInputObjectSchema,
					z.array(ContactEmailWhereUniqueInputObjectSchema),
				])
				?.optional(),
		}),
		z.object({
			connect: z
				.union([
					ContactEmailWhereUniqueInputObjectSchema,
					z.array(ContactEmailWhereUniqueInputObjectSchema),
				])
				?.optional(),
		}),
		z.object({
			update: z
				.union([
					ContactEmailUpdateWithWhereUniqueWithoutContactInputObjectSchema,
					z.array(
						ContactEmailUpdateWithWhereUniqueWithoutContactInputObjectSchema
					),
				])
				?.optional(),
		}),
		z.object({
			updateMany: z
				.union([
					ContactEmailUpdateManyWithWhereWithoutContactInputObjectSchema,
					z.array(
						ContactEmailUpdateManyWithWhereWithoutContactInputObjectSchema
					),
				])
				?.optional(),
		}),
		z.object({
			deleteMany: z
				.union([
					ContactEmailScalarWhereInputObjectSchema,
					z.array(ContactEmailScalarWhereInputObjectSchema),
				])
				?.optional(),
		}),
	])
