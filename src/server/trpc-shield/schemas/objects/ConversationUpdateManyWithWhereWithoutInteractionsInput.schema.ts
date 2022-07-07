import { z } from 'zod'
import { ConversationScalarWhereInputObjectSchema } from './ConversationScalarWhereInput.schema'
import { ConversationUpdateManyMutationInputObjectSchema } from './ConversationUpdateManyMutationInput.schema'
import { ConversationUncheckedUpdateManyWithoutConversationIdInputObjectSchema } from './ConversationUncheckedUpdateManyWithoutConversationIdInput.schema'

export const ConversationUpdateManyWithWhereWithoutInteractionsInputObjectSchema =
	z.object({
		where: ConversationScalarWhereInputObjectSchema,
		data: z.union([
			ConversationUpdateManyMutationInputObjectSchema,
			ConversationUncheckedUpdateManyWithoutConversationIdInputObjectSchema,
		]),
	})
