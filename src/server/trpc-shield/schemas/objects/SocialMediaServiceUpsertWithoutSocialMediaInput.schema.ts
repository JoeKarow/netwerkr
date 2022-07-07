import { z } from 'zod'
import { SocialMediaServiceUpdateWithoutSocialMediaInputObjectSchema } from './SocialMediaServiceUpdateWithoutSocialMediaInput.schema'
import { SocialMediaServiceUncheckedUpdateWithoutSocialMediaInputObjectSchema } from './SocialMediaServiceUncheckedUpdateWithoutSocialMediaInput.schema'
import { SocialMediaServiceCreateWithoutSocialMediaInputObjectSchema } from './SocialMediaServiceCreateWithoutSocialMediaInput.schema'
import { SocialMediaServiceUncheckedCreateWithoutSocialMediaInputObjectSchema } from './SocialMediaServiceUncheckedCreateWithoutSocialMediaInput.schema'

export const SocialMediaServiceUpsertWithoutSocialMediaInputObjectSchema =
	z.object({
		update: z.union([
			SocialMediaServiceUpdateWithoutSocialMediaInputObjectSchema,
			SocialMediaServiceUncheckedUpdateWithoutSocialMediaInputObjectSchema,
		]),
		create: z.union([
			SocialMediaServiceCreateWithoutSocialMediaInputObjectSchema,
			SocialMediaServiceUncheckedCreateWithoutSocialMediaInputObjectSchema,
		]),
	})
