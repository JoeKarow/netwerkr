import { z } from 'zod'
import { SocialMediaServiceWhereUniqueInputObjectSchema } from './SocialMediaServiceWhereUniqueInput.schema'
import { SocialMediaServiceCreateWithoutInteractionsInputObjectSchema } from './SocialMediaServiceCreateWithoutInteractionsInput.schema'
import { SocialMediaServiceUncheckedCreateWithoutInteractionsInputObjectSchema } from './SocialMediaServiceUncheckedCreateWithoutInteractionsInput.schema'

export const SocialMediaServiceCreateOrConnectWithoutInteractionsInputObjectSchema =
	z.object({
		where: SocialMediaServiceWhereUniqueInputObjectSchema,
		create: z.union([
			SocialMediaServiceCreateWithoutInteractionsInputObjectSchema,
			SocialMediaServiceUncheckedCreateWithoutInteractionsInputObjectSchema,
		]),
	})
