import { z } from 'zod'
import { ConversationCreateManyInteractionsInputObjectSchema } from './ConversationCreateManyInteractionsInput.schema'

export const ConversationCreateManyInteractionsInputEnvelopeObjectSchema =
	z.object({
		data: z.array(ConversationCreateManyInteractionsInputObjectSchema),
	})
