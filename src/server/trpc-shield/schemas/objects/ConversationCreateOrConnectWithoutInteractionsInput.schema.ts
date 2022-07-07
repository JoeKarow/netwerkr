import { z } from 'zod'
import { ConversationWhereUniqueInputObjectSchema } from './ConversationWhereUniqueInput.schema'
import { ConversationCreateWithoutInteractionsInputObjectSchema } from './ConversationCreateWithoutInteractionsInput.schema'
import { ConversationUncheckedCreateWithoutInteractionsInputObjectSchema } from './ConversationUncheckedCreateWithoutInteractionsInput.schema'

export const ConversationCreateOrConnectWithoutInteractionsInputObjectSchema =
	z.object({
		where: ConversationWhereUniqueInputObjectSchema,
		create: z.union([
			ConversationCreateWithoutInteractionsInputObjectSchema,
			ConversationUncheckedCreateWithoutInteractionsInputObjectSchema,
		]),
	})
