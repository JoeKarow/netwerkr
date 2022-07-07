import { z } from 'zod'
import { ConversationWhereUniqueInputObjectSchema } from './ConversationWhereUniqueInput.schema'
import { ConversationUpdateWithoutInteractionsInputObjectSchema } from './ConversationUpdateWithoutInteractionsInput.schema'
import { ConversationUncheckedUpdateWithoutInteractionsInputObjectSchema } from './ConversationUncheckedUpdateWithoutInteractionsInput.schema'
import { ConversationCreateWithoutInteractionsInputObjectSchema } from './ConversationCreateWithoutInteractionsInput.schema'
import { ConversationUncheckedCreateWithoutInteractionsInputObjectSchema } from './ConversationUncheckedCreateWithoutInteractionsInput.schema'

export const ConversationUpsertWithWhereUniqueWithoutInteractionsInputObjectSchema =
	z.object({
		where: ConversationWhereUniqueInputObjectSchema,
		update: z.union([
			ConversationUpdateWithoutInteractionsInputObjectSchema,
			ConversationUncheckedUpdateWithoutInteractionsInputObjectSchema,
		]),
		create: z.union([
			ConversationCreateWithoutInteractionsInputObjectSchema,
			ConversationUncheckedCreateWithoutInteractionsInputObjectSchema,
		]),
	})
