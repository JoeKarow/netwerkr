import { z } from 'zod'
import { InteractionsScalarWhereInputObjectSchema } from './InteractionsScalarWhereInput.schema'
import { InteractionsUpdateManyMutationInputObjectSchema } from './InteractionsUpdateManyMutationInput.schema'
import { InteractionsUncheckedUpdateManyWithoutInteractionsInputObjectSchema } from './InteractionsUncheckedUpdateManyWithoutInteractionsInput.schema'

export const InteractionsUpdateManyWithWhereWithoutSourceSocialInputObjectSchema =
	z.object({
		where: InteractionsScalarWhereInputObjectSchema,
		data: z.union([
			InteractionsUpdateManyMutationInputObjectSchema,
			InteractionsUncheckedUpdateManyWithoutInteractionsInputObjectSchema,
		]),
	})
