import { z } from 'zod'
import { SocialMediaServiceWhereUniqueInputObjectSchema } from './SocialMediaServiceWhereUniqueInput.schema'
import { SocialMediaServiceCreateWithoutSocialMediaInputObjectSchema } from './SocialMediaServiceCreateWithoutSocialMediaInput.schema'
import { SocialMediaServiceUncheckedCreateWithoutSocialMediaInputObjectSchema } from './SocialMediaServiceUncheckedCreateWithoutSocialMediaInput.schema'

export const SocialMediaServiceCreateOrConnectWithoutSocialMediaInputObjectSchema =
	z.object({
		where: SocialMediaServiceWhereUniqueInputObjectSchema,
		create: z.union([
			SocialMediaServiceCreateWithoutSocialMediaInputObjectSchema,
			SocialMediaServiceUncheckedCreateWithoutSocialMediaInputObjectSchema,
		]),
	})
