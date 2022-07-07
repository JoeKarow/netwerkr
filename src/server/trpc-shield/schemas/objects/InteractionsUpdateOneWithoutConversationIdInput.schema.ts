import { z } from 'zod'
import { InteractionsCreateWithoutConversationIdInputObjectSchema } from './InteractionsCreateWithoutConversationIdInput.schema'
import { InteractionsUncheckedCreateWithoutConversationIdInputObjectSchema } from './InteractionsUncheckedCreateWithoutConversationIdInput.schema'
import { InteractionsCreateOrConnectWithoutConversationIdInputObjectSchema } from './InteractionsCreateOrConnectWithoutConversationIdInput.schema'
import { InteractionsUpsertWithoutConversationIdInputObjectSchema } from './InteractionsUpsertWithoutConversationIdInput.schema'
import { InteractionsWhereUniqueInputObjectSchema } from './InteractionsWhereUniqueInput.schema'
import { InteractionsUpdateWithoutConversationIdInputObjectSchema } from './InteractionsUpdateWithoutConversationIdInput.schema'
import { InteractionsUncheckedUpdateWithoutConversationIdInputObjectSchema } from './InteractionsUncheckedUpdateWithoutConversationIdInput.schema'

export const InteractionsUpdateOneWithoutConversationIdInputObjectSchema =
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
			upsert:
				InteractionsUpsertWithoutConversationIdInputObjectSchema?.optional(),
		}),
		z.object({
			disconnect: z.boolean()?.optional(),
		}),
		z.object({
			delete: z.boolean()?.optional(),
		}),
		z.object({
			connect: InteractionsWhereUniqueInputObjectSchema?.optional(),
		}),
		z.object({
			update: z
				.union([
					InteractionsUpdateWithoutConversationIdInputObjectSchema,
					InteractionsUncheckedUpdateWithoutConversationIdInputObjectSchema,
				])
				?.optional(),
		}),
	])
