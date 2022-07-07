import { z } from 'zod'
import { InteractionsWhereUniqueInputObjectSchema } from './InteractionsWhereUniqueInput.schema'
import { InteractionsCreateWithoutSourceSocialInputObjectSchema } from './InteractionsCreateWithoutSourceSocialInput.schema'
import { InteractionsUncheckedCreateWithoutSourceSocialInputObjectSchema } from './InteractionsUncheckedCreateWithoutSourceSocialInput.schema'

export const InteractionsCreateOrConnectWithoutSourceSocialInputObjectSchema =
	z.object({
		where: InteractionsWhereUniqueInputObjectSchema,
		create: z.union([
			InteractionsCreateWithoutSourceSocialInputObjectSchema,
			InteractionsUncheckedCreateWithoutSourceSocialInputObjectSchema,
		]),
	})
