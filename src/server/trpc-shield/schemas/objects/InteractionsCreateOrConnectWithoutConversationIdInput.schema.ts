import { z } from 'zod'
import { InteractionsWhereUniqueInputObjectSchema } from './InteractionsWhereUniqueInput.schema'
import { InteractionsCreateWithoutConversationIdInputObjectSchema } from './InteractionsCreateWithoutConversationIdInput.schema'
import { InteractionsUncheckedCreateWithoutConversationIdInputObjectSchema } from './InteractionsUncheckedCreateWithoutConversationIdInput.schema'

export const InteractionsCreateOrConnectWithoutConversationIdInputObjectSchema =
	z.object({
		where: InteractionsWhereUniqueInputObjectSchema,
		create: z.union([
			InteractionsCreateWithoutConversationIdInputObjectSchema,
			InteractionsUncheckedCreateWithoutConversationIdInputObjectSchema,
		]),
	})
