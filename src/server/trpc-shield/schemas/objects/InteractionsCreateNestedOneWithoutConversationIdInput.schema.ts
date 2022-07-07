import { z } from 'zod'
import { InteractionsCreateWithoutConversationIdInputObjectSchema } from './InteractionsCreateWithoutConversationIdInput.schema'
import { InteractionsUncheckedCreateWithoutConversationIdInputObjectSchema } from './InteractionsUncheckedCreateWithoutConversationIdInput.schema'
import { InteractionsCreateOrConnectWithoutConversationIdInputObjectSchema } from './InteractionsCreateOrConnectWithoutConversationIdInput.schema'
import { InteractionsWhereUniqueInputObjectSchema } from './InteractionsWhereUniqueInput.schema'

export const InteractionsCreateNestedOneWithoutConversationIdInputObjectSchema =
	z.union([
		z.object({
			create: z
				.union([
					InteractionsCreateWithoutConversationIdInputObjectSchema,
					InteractionsUncheckedCreateWithoutConversationIdInputObjectSchema,
				])
				?.optional(),
		}),
		z.object({
			connectOrCreate:
				InteractionsCreateOrConnectWithoutConversationIdInputObjectSchema?.optional(),
		}),
		z.object({
			connect: InteractionsWhereUniqueInputObjectSchema?.optional(),
		}),
	])
