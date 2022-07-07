import { z } from 'zod'
import { ConversationCreateWithoutInteractionsInputObjectSchema } from './ConversationCreateWithoutInteractionsInput.schema'
import { ConversationUncheckedCreateWithoutInteractionsInputObjectSchema } from './ConversationUncheckedCreateWithoutInteractionsInput.schema'
import { ConversationCreateOrConnectWithoutInteractionsInputObjectSchema } from './ConversationCreateOrConnectWithoutInteractionsInput.schema'
import { ConversationUpsertWithWhereUniqueWithoutInteractionsInputObjectSchema } from './ConversationUpsertWithWhereUniqueWithoutInteractionsInput.schema'
import { ConversationCreateManyInteractionsInputEnvelopeObjectSchema } from './ConversationCreateManyInteractionsInputEnvelope.schema'
import { ConversationWhereUniqueInputObjectSchema } from './ConversationWhereUniqueInput.schema'
import { ConversationUpdateWithWhereUniqueWithoutInteractionsInputObjectSchema } from './ConversationUpdateWithWhereUniqueWithoutInteractionsInput.schema'
import { ConversationUpdateManyWithWhereWithoutInteractionsInputObjectSchema } from './ConversationUpdateManyWithWhereWithoutInteractionsInput.schema'
import { ConversationScalarWhereInputObjectSchema } from './ConversationScalarWhereInput.schema'

export const ConversationUncheckedUpdateManyWithoutInteractionsInputObjectSchema =
	z.union([
		z.object({
			create: z
				.union([
					ConversationCreateWithoutInteractionsInputObjectSchema,
					z.array(ConversationCreateWithoutInteractionsInputObjectSchema),
					ConversationUncheckedCreateWithoutInteractionsInputObjectSchema,
					z.array(
						ConversationUncheckedCreateWithoutInteractionsInputObjectSchema
					),
				])
				?.optional(),
		}),
		z.object({
			connectOrCreate: z
				.union([
					ConversationCreateOrConnectWithoutInteractionsInputObjectSchema,
					z.array(
						ConversationCreateOrConnectWithoutInteractionsInputObjectSchema
					),
				])
				?.optional(),
		}),
		z.object({
			upsert: z
				.union([
					ConversationUpsertWithWhereUniqueWithoutInteractionsInputObjectSchema,
					z.array(
						ConversationUpsertWithWhereUniqueWithoutInteractionsInputObjectSchema
					),
				])
				?.optional(),
		}),
		z.object({
			createMany:
				ConversationCreateManyInteractionsInputEnvelopeObjectSchema?.optional(),
		}),
		z.object({
			set: z
				.union([
					ConversationWhereUniqueInputObjectSchema,
					z.array(ConversationWhereUniqueInputObjectSchema),
				])
				?.optional(),
		}),
		z.object({
			disconnect: z
				.union([
					ConversationWhereUniqueInputObjectSchema,
					z.array(ConversationWhereUniqueInputObjectSchema),
				])
				?.optional(),
		}),
		z.object({
			delete: z
				.union([
					ConversationWhereUniqueInputObjectSchema,
					z.array(ConversationWhereUniqueInputObjectSchema),
				])
				?.optional(),
		}),
		z.object({
			connect: z
				.union([
					ConversationWhereUniqueInputObjectSchema,
					z.array(ConversationWhereUniqueInputObjectSchema),
				])
				?.optional(),
		}),
		z.object({
			update: z
				.union([
					ConversationUpdateWithWhereUniqueWithoutInteractionsInputObjectSchema,
					z.array(
						ConversationUpdateWithWhereUniqueWithoutInteractionsInputObjectSchema
					),
				])
				?.optional(),
		}),
		z.object({
			updateMany: z
				.union([
					ConversationUpdateManyWithWhereWithoutInteractionsInputObjectSchema,
					z.array(
						ConversationUpdateManyWithWhereWithoutInteractionsInputObjectSchema
					),
				])
				?.optional(),
		}),
		z.object({
			deleteMany: z
				.union([
					ConversationScalarWhereInputObjectSchema,
					z.array(ConversationScalarWhereInputObjectSchema),
				])
				?.optional(),
		}),
	])
