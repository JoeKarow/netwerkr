import { z } from 'zod'
import { ConversationCreateWithoutInteractionsInputObjectSchema } from './ConversationCreateWithoutInteractionsInput.schema'
import { ConversationUncheckedCreateWithoutInteractionsInputObjectSchema } from './ConversationUncheckedCreateWithoutInteractionsInput.schema'
import { ConversationCreateOrConnectWithoutInteractionsInputObjectSchema } from './ConversationCreateOrConnectWithoutInteractionsInput.schema'
import { ConversationCreateManyInteractionsInputEnvelopeObjectSchema } from './ConversationCreateManyInteractionsInputEnvelope.schema'
import { ConversationWhereUniqueInputObjectSchema } from './ConversationWhereUniqueInput.schema'

export const ConversationCreateNestedManyWithoutInteractionsInputObjectSchema =
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
			createMany:
				ConversationCreateManyInteractionsInputEnvelopeObjectSchema?.optional(),
		}),
		z.object({
			connect: z
				.union([
					ConversationWhereUniqueInputObjectSchema,
					z.array(ConversationWhereUniqueInputObjectSchema),
				])
				?.optional(),
		}),
	])
