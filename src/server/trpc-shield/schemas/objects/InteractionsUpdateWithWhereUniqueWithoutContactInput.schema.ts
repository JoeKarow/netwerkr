import { z } from 'zod'
import { InteractionsWhereUniqueInputObjectSchema } from './InteractionsWhereUniqueInput.schema'
import { InteractionsUpdateWithoutContactInputObjectSchema } from './InteractionsUpdateWithoutContactInput.schema'
import { InteractionsUncheckedUpdateWithoutContactInputObjectSchema } from './InteractionsUncheckedUpdateWithoutContactInput.schema'

export const InteractionsUpdateWithWhereUniqueWithoutContactInputObjectSchema =
	z.object({
		where: InteractionsWhereUniqueInputObjectSchema,
		data: z.union([
			InteractionsUpdateWithoutContactInputObjectSchema,
			InteractionsUncheckedUpdateWithoutContactInputObjectSchema,
		]),
	})
