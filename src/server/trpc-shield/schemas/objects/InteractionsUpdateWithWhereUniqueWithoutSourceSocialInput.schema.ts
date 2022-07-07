import { z } from 'zod'
import { InteractionsWhereUniqueInputObjectSchema } from './InteractionsWhereUniqueInput.schema'
import { InteractionsUpdateWithoutSourceSocialInputObjectSchema } from './InteractionsUpdateWithoutSourceSocialInput.schema'
import { InteractionsUncheckedUpdateWithoutSourceSocialInputObjectSchema } from './InteractionsUncheckedUpdateWithoutSourceSocialInput.schema'

export const InteractionsUpdateWithWhereUniqueWithoutSourceSocialInputObjectSchema =
	z.object({
		where: InteractionsWhereUniqueInputObjectSchema,
		data: z.union([
			InteractionsUpdateWithoutSourceSocialInputObjectSchema,
			InteractionsUncheckedUpdateWithoutSourceSocialInputObjectSchema,
		]),
	})
