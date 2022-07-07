import { z } from 'zod'
import { InteractionsUpdateWithoutConversationIdInputObjectSchema } from './InteractionsUpdateWithoutConversationIdInput.schema'
import { InteractionsUncheckedUpdateWithoutConversationIdInputObjectSchema } from './InteractionsUncheckedUpdateWithoutConversationIdInput.schema'
import { InteractionsCreateWithoutConversationIdInputObjectSchema } from './InteractionsCreateWithoutConversationIdInput.schema'
import { InteractionsUncheckedCreateWithoutConversationIdInputObjectSchema } from './InteractionsUncheckedCreateWithoutConversationIdInput.schema'

export const InteractionsUpsertWithoutConversationIdInputObjectSchema =
	z.object({
		update: z.union([
			InteractionsUpdateWithoutConversationIdInputObjectSchema,
			InteractionsUncheckedUpdateWithoutConversationIdInputObjectSchema,
		]),
		create: z.union([
			InteractionsCreateWithoutConversationIdInputObjectSchema,
			InteractionsUncheckedCreateWithoutConversationIdInputObjectSchema,
		]),
	})
