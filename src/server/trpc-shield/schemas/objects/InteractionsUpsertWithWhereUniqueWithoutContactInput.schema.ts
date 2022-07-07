import { z } from 'zod'
import { InteractionsWhereUniqueInputObjectSchema } from './InteractionsWhereUniqueInput.schema'
import { InteractionsUpdateWithoutContactInputObjectSchema } from './InteractionsUpdateWithoutContactInput.schema'
import { InteractionsUncheckedUpdateWithoutContactInputObjectSchema } from './InteractionsUncheckedUpdateWithoutContactInput.schema'
import { InteractionsCreateWithoutContactInputObjectSchema } from './InteractionsCreateWithoutContactInput.schema'
import { InteractionsUncheckedCreateWithoutContactInputObjectSchema } from './InteractionsUncheckedCreateWithoutContactInput.schema'

export const InteractionsUpsertWithWhereUniqueWithoutContactInputObjectSchema =
	z.object({
		where: InteractionsWhereUniqueInputObjectSchema,
		update: z.union([
			InteractionsUpdateWithoutContactInputObjectSchema,
			InteractionsUncheckedUpdateWithoutContactInputObjectSchema,
		]),
		create: z.union([
			InteractionsCreateWithoutContactInputObjectSchema,
			InteractionsUncheckedCreateWithoutContactInputObjectSchema,
		]),
	})
