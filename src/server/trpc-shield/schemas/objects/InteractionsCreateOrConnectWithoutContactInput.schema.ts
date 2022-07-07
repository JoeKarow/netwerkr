import { z } from 'zod'
import { InteractionsWhereUniqueInputObjectSchema } from './InteractionsWhereUniqueInput.schema'
import { InteractionsCreateWithoutContactInputObjectSchema } from './InteractionsCreateWithoutContactInput.schema'
import { InteractionsUncheckedCreateWithoutContactInputObjectSchema } from './InteractionsUncheckedCreateWithoutContactInput.schema'

export const InteractionsCreateOrConnectWithoutContactInputObjectSchema =
	z.object({
		where: InteractionsWhereUniqueInputObjectSchema,
		create: z.union([
			InteractionsCreateWithoutContactInputObjectSchema,
			InteractionsUncheckedCreateWithoutContactInputObjectSchema,
		]),
	})
