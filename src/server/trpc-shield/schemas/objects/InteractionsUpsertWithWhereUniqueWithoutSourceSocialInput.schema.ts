import { z } from 'zod'
import { InteractionsWhereUniqueInputObjectSchema } from './InteractionsWhereUniqueInput.schema'
import { InteractionsUpdateWithoutSourceSocialInputObjectSchema } from './InteractionsUpdateWithoutSourceSocialInput.schema'
import { InteractionsUncheckedUpdateWithoutSourceSocialInputObjectSchema } from './InteractionsUncheckedUpdateWithoutSourceSocialInput.schema'
import { InteractionsCreateWithoutSourceSocialInputObjectSchema } from './InteractionsCreateWithoutSourceSocialInput.schema'
import { InteractionsUncheckedCreateWithoutSourceSocialInputObjectSchema } from './InteractionsUncheckedCreateWithoutSourceSocialInput.schema'

export const InteractionsUpsertWithWhereUniqueWithoutSourceSocialInputObjectSchema =
	z.object({
		where: InteractionsWhereUniqueInputObjectSchema,
		update: z.union([
			InteractionsUpdateWithoutSourceSocialInputObjectSchema,
			InteractionsUncheckedUpdateWithoutSourceSocialInputObjectSchema,
		]),
		create: z.union([
			InteractionsCreateWithoutSourceSocialInputObjectSchema,
			InteractionsUncheckedCreateWithoutSourceSocialInputObjectSchema,
		]),
	})
