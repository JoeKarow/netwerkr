import { z } from 'zod'
import { ConversationWhereUniqueInputObjectSchema } from './ConversationWhereUniqueInput.schema'
import { ConversationUpdateWithoutInteractionsInputObjectSchema } from './ConversationUpdateWithoutInteractionsInput.schema'
import { ConversationUncheckedUpdateWithoutInteractionsInputObjectSchema } from './ConversationUncheckedUpdateWithoutInteractionsInput.schema'

export const ConversationUpdateWithWhereUniqueWithoutInteractionsInputObjectSchema =
	z.object({
		where: ConversationWhereUniqueInputObjectSchema,
		data: z.union([
			ConversationUpdateWithoutInteractionsInputObjectSchema,
			ConversationUncheckedUpdateWithoutInteractionsInputObjectSchema,
		]),
	})
