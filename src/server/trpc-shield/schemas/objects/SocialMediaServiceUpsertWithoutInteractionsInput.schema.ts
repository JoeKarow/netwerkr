import { z } from 'zod'
import { SocialMediaServiceUpdateWithoutInteractionsInputObjectSchema } from './SocialMediaServiceUpdateWithoutInteractionsInput.schema'
import { SocialMediaServiceUncheckedUpdateWithoutInteractionsInputObjectSchema } from './SocialMediaServiceUncheckedUpdateWithoutInteractionsInput.schema'
import { SocialMediaServiceCreateWithoutInteractionsInputObjectSchema } from './SocialMediaServiceCreateWithoutInteractionsInput.schema'
import { SocialMediaServiceUncheckedCreateWithoutInteractionsInputObjectSchema } from './SocialMediaServiceUncheckedCreateWithoutInteractionsInput.schema'

export const SocialMediaServiceUpsertWithoutInteractionsInputObjectSchema =
	z.object({
		update: z.union([
			SocialMediaServiceUpdateWithoutInteractionsInputObjectSchema,
			SocialMediaServiceUncheckedUpdateWithoutInteractionsInputObjectSchema,
		]),
		create: z.union([
			SocialMediaServiceCreateWithoutInteractionsInputObjectSchema,
			SocialMediaServiceUncheckedCreateWithoutInteractionsInputObjectSchema,
		]),
	})
